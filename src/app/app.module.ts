/* Módulos de JS y Angular  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Módulos */
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

/* Componentes */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
