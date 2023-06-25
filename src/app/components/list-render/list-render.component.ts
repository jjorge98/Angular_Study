import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    {
      name: 'Turca',
      type: 'Dog',
      age: 2,
    },
    {
      name: 'Tom',
      type: 'Cat',
      age: 4,
    },
    {
      name: 'Frida',
      type: 'Mouse',
      age: 3,
    },
    {
      name: 'Bob',
      type: 'Horse',
      age: 7,
    },
  ];

  animalDetail: string = '';

  showAge(animal: Animal): void {
    this.animalDetail = `${animal.name} has ${animal.age} year(s)`;
  }
}
