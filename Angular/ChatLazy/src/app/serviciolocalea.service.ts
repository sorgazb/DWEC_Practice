import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiciolocaleaService {

    constructor(private httpClient : HttpClient) { }

      obtenerMensajesAdmin():Observable<Mensaje[]>{
        return this.httpClient.get<Mensaje[]>('http://localhost/serviciosAdmin/listadoTodosMensajes.php')
      }

      obtenerUsuarios():Observable<Usuario[]>{
        return this.httpClient.get<Usuario[]>('http://localhost/serviciosAdmin/listadoTodosUsuarios.php')
      }

      activarMensaje(mensaje:Mensaje):Observable<Mensaje>{
        return this.httpClient.post<Mensaje>('http://localhost/serviciosAdmin/activarMensaje.php',mensaje)
      }

      bloquearMensaje(mensaje:Mensaje):Observable<Mensaje>{
        return this.httpClient.post<Mensaje>('http://localhost/serviciosAdmin/bloquearMensaje.php',mensaje)
      }

      activarUsuario(usuario:Usuario):Observable<Usuario>{
        return this.httpClient.post<Usuario>('http://localhost/serviciosAdmin/activarUsuarios.php',usuario)
      }

      bloquearUsuario(usuario:Usuario):Observable<Usuario>{
        return this.httpClient.post<Usuario>('http://localhost/serviciosAdmin/bloquearUsuarios.php',usuario)
      }
}
