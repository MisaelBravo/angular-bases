import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero( newName:string ):void{
    this.name= newName
  }

  changeAge(newAge:number):void{
      this.age = newAge
  }

  resetData(defaultName:string, defaultAge:number): void{
    this.name = defaultName;
    this.age = defaultAge;
  }


}
