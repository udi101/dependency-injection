import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { IAnimal } from './interfaces/IAnimal.interface';
import { AnimalsService } from './services/animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  displayAnimalFamily = true;
  animals: Array<IAnimal> = new Array<IAnimal>();

  displayColumns = ['name', 'family'];
  constructor(private animalService: AnimalsService) { }

  ngOnInit() {
    this.animalService.animals$.pipe(
      tap(() => { })
    ).subscribe(animals => { this.animals = animals; });
  }

  changeDisplay(e) {
    if (e.target.checked) {
      this.displayColumns.splice(this.displayColumns.findIndex(x => x === 'family'), 1);
      return;
    }
    this.displayColumns = ['name', 'family'];
  }
}
