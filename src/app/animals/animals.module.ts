import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCheckboxModule, MatButtonModule } from '@angular/material';

import { CurrentAnimalComponent } from './current-animal/current-animal.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { reducer } from './state/animals.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnimalEffects } from './state/animal.effects';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    AnimalsRoutingModule,
    StoreModule.forFeature('animals', reducer),
    EffectsModule.forFeature([AnimalEffects])
  ],
  declarations: [AnimalsComponent, CurrentAnimalComponent]
})
export class AnimalsModule { }
