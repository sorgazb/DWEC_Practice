import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpCliente:HttpClient) { }

  leerProductos() {
    return this.httpCliente.get<Producto[]>("assets/getProductos.json")
  }
}
