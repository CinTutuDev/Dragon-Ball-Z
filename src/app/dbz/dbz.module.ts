import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes */
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';


@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
