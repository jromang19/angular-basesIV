

import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html',
  standalone: false
})

export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },{
      name: 'Goku',
      power: 9500
    }
  ];
}
