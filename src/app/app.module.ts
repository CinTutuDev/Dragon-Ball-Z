/* Módulos de JS y Angular  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Módulos */
import { CounterModule } from './counter/counter.module';

/* Componentes */
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, ListComponent],
  imports: [BrowserModule, CounterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
