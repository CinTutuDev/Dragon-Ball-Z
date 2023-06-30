import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'bdz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDeletId: EventEmitter<string> = new EventEmitter();

  onDeleteCrharacter(id?: string): void {
    /* Si no tengo id no mando nada */
    if (!id) return;
    console.log({ id });
    this.onDeletId.emit(id);
  }
}
