import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    /* debugger; */
    /*  console.log(this.character); */

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit({ ...this.character });

    /* Para limpiar al enviar los input */
    this.character = { name: '', power: 0 };
  }
}
