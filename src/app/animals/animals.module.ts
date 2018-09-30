import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
// NgRx
import { StoreModule } from '@ngrx/store';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { reducer } from './state/animals.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    AnimalsRoutingModule,
    StoreModule.forFeature('animals', reducer)
  ],
  declarations: [AnimalsComponent]
})
export class AnimalsModule { }
