import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidi } from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {
  public character : Character[] =[
    {id:uuidi(),name:'Krillin', power:500},
    {id:uuidi(),name:'Goku', power:9500},
    {id:uuidi(),name:'Vegeta', power:7500},
  ]

  public nombreLista: string ='Lista de Personajes'

  onNewCharacter ( character : Character):void{

    const newCharacter : Character = {id:uuidi(), ...character}

    this.character.push(newCharacter);
  }

  /*onNewDelete(index:number):void{
    console.log("MAINPAGE",index)
    this.character.splice(index,1)
  }*/

  deleteCharacterById(id:string): void{
    this.character = this.character.filter(character => character.id !== id);
  }

}
