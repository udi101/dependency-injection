import { Injectable } from '@angular/core';
import { IWorker } from './worker.interface';
@Injectable()
export class WorkersService {

  workers: Array<IWorker> = new Array<IWorker>({ name: 'Udi' }, { name: 'Erez' }, { name: 'Maya' });
  constructor() { console.log('I have been created'); }

  getWorkers(): Array<IWorker> {
    return <Array<IWorker>>this.workers;
  }

  addWorker(workerName: string) {
    this.workers.push({ name: workerName });
  }
}

