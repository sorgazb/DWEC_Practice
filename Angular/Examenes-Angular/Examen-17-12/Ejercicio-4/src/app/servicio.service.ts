import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruta } from './fruta';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpCliente:HttpClient) { }

  leerFrutas():Observable<string> {
    return this.httpCliente.get("assets/precios.txt",{responseType:'text'})
  }

  procesarDatos(bloqueFruta:string):Fruta[]{
    const frutas : Fruta [] = []
    const lineas = bloqueFruta.split('\n')
    for (const linea of lineas) {
      const dato = linea.split(':')
      let fruta : Fruta = new Fruta(dato[0],Number(dato[1]))
      frutas.push(fruta)
    }
    return frutas
  }
}
