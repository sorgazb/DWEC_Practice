import { Component } from '@angular/core';

@Component({
  selector: 'app-lombarda',
  templateUrl: './lombarda.component.html',
  styleUrls: ['./lombarda.component.css']
})
export class LombardaComponent {
  puntos: number = 0;
  colores = ['red','blue','green','yellow']
  color: string = "";
  intervalo : any = null
  colorTexto: string = "";

  generarColorRandom() {
    this.intervalo = setInterval(()=>{
      this.generarCadenaTexto()
      this.generarCadenaTextoLetras()
    },2000)

  }

  generarCadenaTexto(){
    let numeroRand = 0
      numeroRand = Math.floor(Math.random() * this.colores.length)
      this.color = this.colores[numeroRand]
  }

  generarCadenaTextoLetras(){
    let numeroRand = 0
      numeroRand = Math.floor(Math.random() * this.colores.length)
      this.colorTexto = this.colores[numeroRand]
  }

  jugar() {
    if(this.color == this.colorTexto){
      this.puntos = this.puntos +1
    }else{
      this.puntos = this.puntos -1
    }
  }
}
