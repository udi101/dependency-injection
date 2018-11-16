import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'select-filter-control',
  templateUrl: './select-filter-control.component.html',
  styleUrls: ['./select-filter-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectFilterControlComponent
    }
  ]
})
export class SelectFilterControlComponent implements OnInit, ControlValueAccessor {
  filteredControl = new FormControl();
  options: Array<{ id: number, value: string }> = new Array<{ id: number, value: string }>();
  @Input('options') set _options(val: Array<{ id: number, value: string }>) {
    this.options = val;
  }
  filteredList: Array<{ id: number, value: string }> = new Array<{ id: number, value: string }>();

  writeValue(obj: Array<{ id: number, value: string }>): void {
  }

  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  constructor() { }

  ngOnInit() {

  }

}
