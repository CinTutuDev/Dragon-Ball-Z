import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes */
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [HeroComponent, ListComponent],
})
export class HeroesModule {}
