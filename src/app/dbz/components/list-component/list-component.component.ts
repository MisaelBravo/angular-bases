import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {

  @Input()
  public characterList : Character[]=[
    {name:'Trunks', power:10}
  ]

  @Output()
  public onDeleteEmitter : EventEmitter<string> = new EventEmitter();




  onDeleteCharacter(id?:string): void{
    console.log('eliminar')
    if(!id) return;

    this.onDeleteEmitter.emit(id)
  }


}
