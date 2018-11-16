import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule } from '@angular/material';

import { MatSelectFilterComponent } from './mat-select-filter.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SelectFilterControlComponent } from './select-filter-control/select-filter-control.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule, MatInputModule,
    NgxMatSelectSearchModule,
    RouterModule.forChild([
      { path: '', component: MatSelectFilterComponent }
    ])
  ],
  declarations: [MatSelectFilterComponent, SelectFilterControlComponent]
})
export class MatSelectFilterModule { }
