import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdminService {

  constructor(private httpClient : HttpClient) { }

    obtenerMensajesAdmin():Observable<Mensaje[]>{
      return this.httpClient.get<Mensaje[]>('http://moralo.atwebpages.com/chat/ObtenerMensajes.php')
    }

    obtenerUsuarios():Observable<Usuario[]>{
      return this.httpClient.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php')
    }

    activarMensaje(mensaje:Mensaje):Observable<Mensaje>{
      return this.httpClient.put<Mensaje>('http://moralo.atwebpages.com/chat/ActivarMensaje.php',mensaje)
    }

    bloquearMensaje(mensaje:Mensaje):Observable<Mensaje>{
      return this.httpClient.put<Mensaje>('http://moralo.atwebpages.com/chat/BloquearMensaje.php',mensaje)
    }

    activarUsuario(usuario:Usuario):Observable<Usuario>{
      return this.httpClient.post<Usuario>('http://moralo.atwebpages.com/chat/ActivarUsuario.php ',usuario)
    }

    bloquearUsuario(usuario:Usuario):Observable<Usuario>{
      return this.httpClient.post<Usuario>('http://moralo.atwebpages.com/chat/BloquearUsuario.php',usuario)
    }
}
