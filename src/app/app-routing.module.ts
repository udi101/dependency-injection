import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './workers/list/list.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'workers', children: [
          { path: 'list', component: ListComponent }
        ]
      }
    ]),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
