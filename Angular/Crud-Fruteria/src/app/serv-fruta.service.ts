import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrutaModule } from './fruta/fruta.module';

@Injectable({
  providedIn: 'root'
})
export class ServFrutaService {

  actualizarFruta(fruta: FrutaModule) {
    return this.httpClient.put<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php',fruta)
  }

  constructor(private httpClient:HttpClient) { }

  leerFrutas():Observable<FrutaModule[]>{
    return this.httpClient.get<FrutaModule[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php')
  }

  crearFruta(fruta:FrutaModule):Observable<FrutaModule>{
    return this.httpClient.post<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php',fruta)
  }

  eliminarFruta(id:number){
    return this.httpClient.delete<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id)
  }
}
