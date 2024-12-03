import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

imgChica: string = ""
imgChico: string = ""

wChica: number = 0
wChico: number = 0

hChica: number = 0
hChico: number = 0

num : number = 0

activadoA : boolean = false
activadoO: boolean = false

imgChicaB: string = ""
imgChicoB: string = ""

wChicaB: number = 0
wChicoB: number = 0

hChicaB: number = 0
hChicoB: number = 0

intervaloChica :any

intervaloChico :any

activarChica() {
  this.num = Math.ceil(Math.random()*100)
  this.imgChica = "https://randomuser.me/api/portraits/women/"+this.num+".jpg"
  this.wChica = Math.ceil(Math.random()*300)
  this.hChica = Math.ceil(Math.random()*300)
}

activarChico() {
  this.num = Math.ceil(Math.random()*100)
  this.imgChico = "https://randomuser.me/api/portraits/men/"+this.num+".jpg"
  this.wChico = Math.ceil(Math.random()*300)
  this.hChico = Math.ceil(Math.random()*300)
}

activarChicaBucle() {
  this.activadoA = false
    this.intervaloChica = setInterval(() => {
      this.num = Math.ceil(Math.random()*100)
      this.imgChicaB = "https://randomuser.me/api/portraits/women/"+this.num+".jpg"
      this.wChicaB = Math.ceil(Math.random()*300)
      this.hChicaB = Math.ceil(Math.random()*300)
  }, 1000); // 1000 ms = 1 segundo
  this.activadoA = true
  if(this.activadoO){
    clearInterval(this.intervaloChico)
    this.activadoO = false
  }
}

activarChicoBucle() {
this.activadoO = true
  this.intervaloChico = setInterval(() => {
    this.num = Math.ceil(Math.random()*100)
    this.imgChicoB = "https://randomuser.me/api/portraits/men/"+this.num+".jpg"
    this.wChicoB = Math.ceil(Math.random()*300)
    this.hChicoB = Math.ceil(Math.random()*300)
}, 1000); // 1000 ms = 1 segundo
this.activadoO = true
if(this.activadoA){
  clearInterval(this.intervaloChica)
  this.activadoA = false
}
}

}
