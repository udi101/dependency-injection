import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    WorkersRoutingModule
  ],
  declarations: [ListComponent]
})
export class WorkersModule { }
