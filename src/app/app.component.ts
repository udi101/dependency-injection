import { Component, SkipSelf, Optional, OnInit } from '@angular/core';
import { WorkersService } from './workers/workers.service';
import { IWorker } from './workers/worker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WorkersService]
})

export class AppComponent implements OnInit {
  workers: Array<IWorker>;
  constructor(public workersService: WorkersService) { }

  ngOnInit() {
    this.workers = this.workersService.workers;
  }
  addWorker() {
    this.workersService.addWorker('appWorker');
  }
}
