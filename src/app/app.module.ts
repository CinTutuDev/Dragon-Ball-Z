/* Módulos de JS y Angular  */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Módulos */
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

/* Componentes */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
