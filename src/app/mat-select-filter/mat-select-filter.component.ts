import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ISelectFilterOption } from './select-filter-option.interface';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gw-select-filter',
  templateUrl: './mat-select-filter.component.html',
  styleUrls: ['./mat-select-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MatSelectFilterComponent)
    }
  ]
})

export class MatSelectFilterComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() searchPlaceholder = 'Enter search string';
  @Input() noMatchesMessage = 'No matching items were found';
  @Input() placeholder = 'Select an item';
  options: Array<ISelectFilterOption> = new Array<ISelectFilterOption>();


  // Building a types Array of ISelectFilterOption
  @Input('options') set _options(value: Array<any>) {
    const keys = Object.keys(value[0]);
    const idText = keys[0];
    const valueText = keys[1];
    const tempOptions: Array<ISelectFilterOption> = value.map(inputObject => {
      return { id: inputObject[idText], value: inputObject[valueText] };
    });
    this.options = tempOptions;
  }
  filterSubscription: Subscription;
  optionsSubscription: Subscription;

  filteredOptions: Array<ISelectFilterOption> = new Array<ISelectFilterOption>();
  frmFilterTest: FormGroup;
  optionFilter: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder) { }
  onChange = (data: any): void => { };

  ngOnInit() {
    this.filteredOptions = [...this.options];
    this.frmFilterTest = this.formBuilder.group({
      items: ''
    });

    this.optionsSubscription = this.frmFilterTest.get('items').valueChanges.subscribe(() =>
      this.onChange(this.frmFilterTest.get('items').value)
    );

    this.filterSubscription = this.optionFilter.valueChanges.subscribe(() =>
      this.filterOptions()
    );
  }

  filterOptions() {
    if (!this.options) { return; }
    const search = this.optionFilter.value;
    this.filteredOptions = [...this.options.filter(_option => _option.value.toLowerCase().includes(search.toLowerCase()))];
  }

  writeValue(obj: Array<number>): void {
    this.frmFilterTest.setValue({ items: obj });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
    this.optionsSubscription.unsubscribe();
  }
}
