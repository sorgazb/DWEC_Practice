import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  temporizador : number = 0
  intervalo : any = null

  iniciar(){
    this.intervalo = setInterval(() => {
      this.temporizador ++
  }, 1000); // 1000 ms = 1 segundo
  }

  parar(){
    if(this.intervalo){
        clearInterval(this.intervalo);
        this.intervalo = null;
    }
  }

  resetear(){
    this.temporizador = 0
  }
}
