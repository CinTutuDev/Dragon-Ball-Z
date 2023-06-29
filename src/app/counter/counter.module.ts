import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
  imports: [],
  providers: [],
  bootstrap: [CounterComponent],
})
export class CounterModule {}
