import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  colores:string [] = ['red','yellow','blue','orange','green','pink']
  color:string = ""
  numero:number = 0

  generarColorRandom() {
    this.generarNumero()
    this.color = this.colores[this.numero]
  }

  generarNumero(){
    this.numero = Math.floor(Math.random()*(this.colores.length-1))
  }
}
