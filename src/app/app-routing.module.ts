import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'workers', loadChildren: './workers/workers.module#WorkersModule' },
      { path: 'animals', loadChildren: './animals/animals.module#AnimalsModule' },
      { path: 'filter-list', loadChildren: './mat-select-filter/mat-select-filter.module#MatSelectFilterModule' }
    ]),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
