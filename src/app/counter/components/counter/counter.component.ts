import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr />
    <h2>{{ titleComponent }}</h2>
    <h3>Counter:{{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetTen(10)">Reset</button>
    <button (click)="resertCounter()">Reset Other</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public titleComponent: string = 'Componente del Counter';
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
