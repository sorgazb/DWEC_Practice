import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  numAleatorio : number = 0
  intervalo : any = null

  iniciar(){
    this.intervalo = setInterval(() => {
      this.numAleatorio = Math.floor(Math.random()*2000)
  }, 1000); // 1000 ms = 1 segundo
  }

  parar(){
    if(this.intervalo){
        clearInterval(this.intervalo);
        this.intervalo = null;
    }
  }

}
