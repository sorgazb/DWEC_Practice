import { Component } from '@angular/core';

@Component({
  selector: 'app-azul',
  templateUrl: './azul.component.html',
  styleUrls: ['./azul.component.css']
})
export class AzulComponent {
  euros : number = 0
  dolares : number = 0
  yenes : number = 0

  limpiar(){
    this.euros = 0
    this.dolares = 0
    this.yenes = 0
  }

  conversion(moneda:string){
    if(moneda == 'euros'){
      this.dolares = this.euros * 0.95
      this.yenes = this.euros * 162.76
    }else if(moneda == 'dolares'){
      this.euros = this.dolares * 1.05
      this.yenes = this.dolares * 154.33
    }else if(moneda == 'yenes'){
      this.euros = this.yenes * 0.0061
      this.dolares = this.yenes * 0.0065
    }
  }
}
