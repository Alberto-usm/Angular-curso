import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América'];  
    herroeBorrado: string = '';

    borrarHeroe(){
      this.herroeBorrado = this.heroes.shift() || '';
      
    }
}
