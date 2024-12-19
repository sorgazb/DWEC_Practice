import { Component } from '@angular/core';

@Component({
  selector: 'app-coliflor',
  templateUrl: './coliflor.component.html',
  styleUrls: ['./coliflor.component.css']
})
export class ColiflorComponent {
  letras = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
color: string = "";
intervalo : any = null

generarColorRandom() {
  this.intervalo = setInterval(()=>{
    this.color = this.generarCadenaTexto()
  },2000)

}

generarCadenaTexto(){
  let cadena = '#'
  let numeroRand = 0
  for (let index = 0; index < 6; index++) {
    numeroRand = Math.floor(Math.random() * this.letras.length)
    let caracter = this.letras[numeroRand]
    cadena = cadena+''+caracter
  }
  return cadena
}


parar(){
  if(this.intervalo){
      clearInterval(this.intervalo);
      this.intervalo = null;
  }
}

}
