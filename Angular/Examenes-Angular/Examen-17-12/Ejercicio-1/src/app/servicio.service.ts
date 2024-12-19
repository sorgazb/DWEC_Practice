import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen } from './imagen';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor(private httpCliente:HttpClient) { }

  leerImagenes() {
    return this.httpCliente.get<Imagen[]>("assets/getImagenes.json")
  }
}
