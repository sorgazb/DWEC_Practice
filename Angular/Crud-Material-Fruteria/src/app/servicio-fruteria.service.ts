import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Frutas } from './frutas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioFruteriaService {

  constructor(private httpCliente:HttpClient) { }

  cargarFrutas() {
    return this.httpCliente.get<Frutas[]>("http://moralo.atwebpages.com/menuAjax/productos2/index.php")
  }

  eliminarFruta(id: number) {
    return this.httpCliente.delete<Frutas>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id)
  }

  insertarFruta(fruta : Frutas):Observable<Frutas>{
    return this.httpCliente.post<Frutas>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php',fruta)
  }

  modificarFruta(fruta : Frutas){
    return this.httpCliente.put<Frutas>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php',fruta) 
  }
}
