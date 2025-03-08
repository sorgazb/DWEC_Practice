import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {
    @Input()
    mensajeDeEntradaHortaliza : string = ''
  
    @Output()
    mensajeDeSalidaHortaliza = new EventEmitter()
  
    @Output()
    nSemilleros = new EventEmitter()
    numeroDeSemilleros : number = 0
  
    mensajeParaHuerto : string = ''
  
    constructor () {}
  
    enviarMensaje(){
      this.mensajeDeSalidaHortaliza.emit({mensaje:this.mensajeParaHuerto})
    }
  
    enviarSemillas(){
      this.numeroDeSemilleros = Math.floor(Math.random()*100)
      this.nSemilleros.emit({semilleros:this.numeroDeSemilleros})
    }
}
