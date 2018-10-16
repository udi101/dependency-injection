import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatCheckboxModule, MatButtonModule, MatInputModule } from '@angular/material';

import { CurrentAnimalComponent } from './components/current-animal/current-animal.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './containers/animals/animals.component';
import { animalReducer } from './state/animals.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnimalEffects } from './state/animal.effects';
import { reducers } from './state'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    AnimalsRoutingModule,
    StoreModule.forFeature('animals', reducers),
    EffectsModule.forFeature([AnimalEffects])
  ],
  declarations: [AnimalsComponent, CurrentAnimalComponent]
})
export class AnimalsModule { }
