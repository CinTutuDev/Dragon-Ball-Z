import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'She Hulk', 'Thor']

}
