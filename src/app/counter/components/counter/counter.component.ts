import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
    <h2>Contador Component</h2>
    <p>Counter {{counter}}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter(10)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent{


  public counter: number = 10;

  increaseBy(caseDecremento:number):void{
       this.counter +=caseDecremento;
  }
  resetCounter(caseDecremento:number):void{
    this.counter =caseDecremento;
}

}
