import { Component, OnInit, Optional, Host, SkipSelf, Self } from '@angular/core';
import { WorkersService } from './../workers.service';
import { IWorker } from '../worker.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [WorkersService]
})
export class ListComponent implements OnInit {
  workers: Array<IWorker>;

  constructor(@Self() private workersService: WorkersService) {
  }

  ngOnInit() {
    this.workers = this.workersService.workers;
  }

  addWorker(workerName: string) {
    this.workersService.addWorker(workerName);
  }
}
