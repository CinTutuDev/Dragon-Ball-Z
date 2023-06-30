import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'bdz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeletId: EventEmitter<number> = new EventEmitter();


  onDeleteCrharacter(index: number): void{
    console.log({index});
    this.onDeletId.emit(index );
  }

}
