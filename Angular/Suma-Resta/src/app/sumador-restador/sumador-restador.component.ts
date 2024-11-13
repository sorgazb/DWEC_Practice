import { Component } from '@angular/core';

@Component({
  selector: 'app-sumador-restador',
  templateUrl: './sumador-restador.component.html',
  styleUrls: ['./sumador-restador.component.css']
})
export class SumadorRestadorComponent {
  numero:number = 0

  suma(){
    this.numero ++
  }

  resta(){
    this.numero --
  }
}
