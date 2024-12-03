import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModule } from './producto/producto.module';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient:HttpClient) { }

  leerProductos():Observable<ProductoModule[]>{
    return this.httpClient.get<ProductoModule[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php')
  }
}
