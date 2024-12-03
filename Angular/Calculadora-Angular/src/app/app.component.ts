import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1 : number = 0
  numero2 : number = 0
  resultado : number = 0

  suma(){
    this.resultado = this.numero1 + this.numero2
  }

  resta(){
    this.resultado = this.numero1 - this.numero2
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2
  }

  dividir(){
    this.resultado = this.numero1 / this.numero2
  }
}
