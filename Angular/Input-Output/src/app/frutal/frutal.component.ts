import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frutal',
  templateUrl: './frutal.component.html',
  styleUrls: ['./frutal.component.css']
})
export class FrutalComponent {

  @Input()
  mensajeDeEntradaFrutal : string = ''

  @Output()
  mensajeDeSalidaFrutal = new EventEmitter()

  @Output()
  nPlantones = new EventEmitter()
  numeroDePlantones : number = 0

  mensajeParaHuerto : string = ''

  constructor () {}

  enviarMensaje(){
    this.mensajeDeSalidaFrutal.emit({mensaje:this.mensajeParaHuerto})
  }

  enviarPlantones(){
    this.numeroDePlantones = Math.floor(Math.random()*1000)
    this.nPlantones.emit({plantones:this.numeroDePlantones})
  }
}
