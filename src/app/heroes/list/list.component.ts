import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroedeleted?: string;
  public heroesNames : string[] = [
    'Spiderman','Iroman','Hulk','She Hulk', 'Thor'
  ]


  removeLastHeroe (): void {
   const deletedHeroe =  this.heroesNames.pop();
   this.heroedeleted = deletedHeroe;



  }

}
