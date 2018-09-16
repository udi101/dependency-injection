import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    AnimalsRoutingModule
  ],
  declarations: [AnimalsComponent]
})
export class AnimalsModule { }
