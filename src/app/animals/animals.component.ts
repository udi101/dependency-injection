import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { IAnimal } from './interfaces/IAnimal.interface';
import { AnimalsService } from './services/animals.service';

// NgRx
import * as fromAnimal from './state/animals.reducer';
import * as animalActions from './state/animal.actions';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'app-animals',
    templateUrl: './animals.component.html',
    styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
    displayAnimalFamily: boolean;
    currentAnimalId = 0;
    animals: Array<IAnimal> = new Array<IAnimal>();

    displayColumns = ['name', 'family', 'current'];

    constructor(private animalService: AnimalsService,
        private store: Store<fromAnimal.IState>) { }

    ngOnInit() {
        this.animalService.animals$.pipe(
            tap(() => { })
        ).subscribe(animals => { this.animals = animals; });

        // registering the store state
        this.store.pipe(select(fromAnimal.getAnimalsDiplayAnimalfamily)).subscribe(
            displayAnimalFamily => {
                this.displayAnimalFamily = displayAnimalFamily;
            }
        );
        this.store.pipe(select(fromAnimal.getCurrentAnimal)).subscribe(
            (currentAnimalId: number) => this.currentAnimalId = currentAnimalId
        );
    }

    isCurrentAnimal(animalId: number): boolean {
        return animalId === this.currentAnimalId;
    }

    changeDisplay(e: boolean) {
        this.store.dispatch(new animalActions.ToggleDisplayFamily(e));
    }

    setCurrentAnimal(animalId: number) {
        this.store.dispatch(new animalActions.SetCurrentAnimal(animalId));
    }
}


