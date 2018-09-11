import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material'
import { WorkersRoutingModule } from './workers-routing.module';
import { ListComponent } from './list/list.component';
import { WorkersService } from './workers.service';
import { WorkersComponent } from './workers.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    WorkersRoutingModule
  ],
  declarations: [ListComponent, WorkersComponent],
  providers: [WorkersService]
})
export class WorkersModule { }
