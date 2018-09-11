import { Component, OnInit, Host } from '@angular/core';
import { WorkersService } from './workers.service';
import { IWorker } from './worker.interface';
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: [WorkersService]
})
export class WorkersComponent implements OnInit {
  get workers(): Array<IWorker> { return this.workersService.workers; }
  constructor(@Host() private workersService: WorkersService) { }

  ngOnInit() {
  }

  addWorker(workerName: string) {
    this.workersService.addWorker(workerName);
  }

}
