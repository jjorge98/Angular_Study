import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animals: Animal[] = [];

  animalDetail: string = '';

  showAge(animal: Animal): void {
    this.animalDetail = `${animal.name} has ${animal.age} year(s)`;
  }

  deleteAnimal(animal: Animal) {
    this.listService.remove(animal.id).subscribe();

    this.animals = this.animals.filter((a) => animal.name !== a.name);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }
}
