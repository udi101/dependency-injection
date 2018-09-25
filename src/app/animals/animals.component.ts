import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { IAnimal } from './interfaces/IAnimal.interface';
import { AnimalsService } from './services/animals.service';
import { MatCheckboxChange } from '@angular/material';

@Component({
    selector: 'app-animals',
    templateUrl: './animals.component.html',
    styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
    displayAnimalFamily = false;
    animals: Array<IAnimal> = new Array<IAnimal>();

    get displayColumns(): Array<string> {
        return this.displayAnimalFamily ? ['name', 'family'] : ['name'];
    }

    displayHeaders = ['name', 'family'];

    constructor(private animalService: AnimalsService) { }

    ngOnInit() {
        this.animalService.animals$.pipe(
            tap(() => { })
        ).subscribe(animals => { this.animals = animals; });
    }

    changeDisplay(e: boolean) {
        this.displayAnimalFamily = e;
    }
}


