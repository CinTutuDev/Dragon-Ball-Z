import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbsS: DbzService) {}

  get characters(): Character[] {
    return [...this.dbsS.characters];
  }

  deleteCharacterById(id: string): void {
    this.dbsS.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbsS.addCharacter(character);
  }
}
