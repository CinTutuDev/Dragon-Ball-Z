import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetTen(value: number): void {
    this.counter = value;
  }
  resertCounter() {
    this.counter = 10;
  }
}
