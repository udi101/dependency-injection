import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

// NgRx
import { StoreModule } from '@ngrx/store';

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalsComponent } from './animals.component';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    AnimalRoutingModule,
    StoreModule.forFeature('animals', {})
  ],
  declarations: [AnimalsComponent]
})
export class AnimalModule { }

