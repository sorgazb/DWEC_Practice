import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Numero } from './numero';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  listaN : Numero [] = []
  objeto !: Numero
  constructor(private httpCliente:HttpClient) {
    this.generarLista()
  }

  retornarLista(){
    return this.listaN
  }

  generarLista(){
    let totalTuplas = 200
    let indiceTupla = 0
    for (let index = 0; index < totalTuplas; index++) {
      let n1 = null
      let n2 = null
      let n3 = null
      let n4 = null
      let n5 = null
      let n6 = null
      do {
        n1 = Math.floor(Math.random() * 100)
        n2 = Math.floor(Math.random() * 100)
        n3 = Math.floor(Math.random() * 100)
        n4 = Math.floor(Math.random() * 100)
        n5 = Math.floor(Math.random() * 100)
        n6 = Math.floor(Math.random() * 100)
      } while (this.comprobarIguales(n1,n2,n3,n4,n5,n6) == true);
      let tupla = new Numero(indiceTupla,n1, n2, n3, n4, n5, n6)
      this.listaN.push(tupla)
      indiceTupla = indiceTupla + 1
    }
  }

  comprobarIguales(n1:number, n2:number, n3:number, n4:number, n5:number, n6:number){
    let iguales = false
    let numeros = [n1,n2,n3,n4,n5,n6]
    for (let index = 0; index < numeros.length; index++) {
      for (let indexJ = numeros.length ; indexJ < 0; indexJ--) {
        if(index != indexJ-1){
          if(numeros[index] == numeros[indexJ-1]){
            iguales = true
          }
        }
      }
    }
    return iguales
  }

  actualizarTupla(tupla:Numero){
    if(tupla != undefined){
      let tuplaModificar = this.listaN.find(tupla => tupla.indice === tupla.indice)
      if(tuplaModificar != null){
        tuplaModificar.n1 = tupla.n1
        tuplaModificar.n2 = tupla.n2
        tuplaModificar.n3 = tupla.n3
        tuplaModificar.n4 = tupla.n4
        tuplaModificar.n5 = tupla.n5
        tuplaModificar.n6 = tupla.n6
      }
    }
  }

  eliminarElemento(tupla:Numero){
    if (confirm("Realmente quiere borrarlo?")) {
      const index = this.listaN.findIndex(tupla => tupla.indice === tupla.indice);
      if (index != null) {
        this.listaN.splice(index, 1);
      }
    }
  }

  insertarElemento(tupla:Numero){
    this.listaN.push(tupla)
  }

}
