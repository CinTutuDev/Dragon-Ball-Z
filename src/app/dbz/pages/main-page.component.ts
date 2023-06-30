import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(public dbsS: DbzService) {

  }



}
