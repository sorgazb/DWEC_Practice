import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  indicehoverP: number =  -1;
verNombreP() {
  this.indicehoverP = -1
}
verUrl(indice : number) {
  this.indicehoverP = indice
}

activarB: boolean = false;
color: string = "";
tamanioF: string = "";
segundos: number =10;
textoBtn:string = "Boton Habilitado"
temporizador : any

colores : string [] = ['red','blue', 'green', 'yellow','pink','white','black','grey','orange','gold']
tamanios : string [] = ['8px','10px','12px','16px', '20px', '24px','28px','30px','36px','48px']


personas  = [
  { id: 1, nombre: 'Ana', edad: 25 },
  { id: 2, nombre: 'Luis', edad: 30 },
  { id: 3, nombre: 'Sofia', edad: 28 },
  { id: 4, nombre: 'Miguel', edad: 35 }]


  periodicos = [
    { nombre: 'El País', url: 'https://elpais.com' },
    { nombre: 'El Mundo', url: 'https://elmundo.es' },
    { nombre: 'ABC', url: 'https://abc.es' },
    { nombre: 'La Vanguardia', url: 'https://lavanguardia.com' },
    { nombre: 'El Diario', url: 'https://eldiario.es' }
  ];

cuentaAtras() {
  this.activarB = true
  this.textoBtn = "Boton Deshabilitado"
  this.temporizador = setInterval(()=>{
    this.segundos --
    this.color = this.colores[this.segundos]
    this.tamanioF = this.tamanios[this.segundos]
    if(this.segundos == 0){
      clearInterval(this.temporizador)
      this.textoBtn = "Boton Habilitado"
      this.segundos = 10
      this.activarB = false
      this.color = ""
      this.tamanioF = ""
    }
  },1000);
}

indicehover: number =  -1;

verNombre() {
  this.indicehover = -1
}

verEdad(indice:number) {
  this.indicehover = indice
}


}
