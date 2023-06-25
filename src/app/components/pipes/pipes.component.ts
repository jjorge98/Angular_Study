import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  today = new Date();

  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };

  object2: { [key: number]: string } = { 2: 'foo', 1: 'bar' };

  map = new Map([
    [2, 'foo'],
    [1, 'bar'],
  ]);

  str: string = 'abcdefghij';
}
