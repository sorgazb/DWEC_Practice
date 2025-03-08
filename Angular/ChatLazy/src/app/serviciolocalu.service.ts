import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServiciolocaluService {

  constructor(private http : HttpClient) { }

  insertarUsuario(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost/serviciosChat/insertarUsuario.php', usuario)
  }

  inicarSession(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost/serviciosChat/login.php',usuario)
  }

  leerMensajes():Observable<Mensaje[]>{
    return this.http.get<Mensaje[]>('http://localhost/serviciosChat/listadoMensajes.php')
  }

  mandarMensajeGlobal(mensaje : Mensaje):Observable <Mensaje>{
    return this.http.post<Mensaje>('http://localhost/serviciosChat/insertarmensaje.php',mensaje)
  }

  leerMensajesPrivados(email:string):Observable<Mensaje[]>{
    return this.http.get<Mensaje[]>('http://localhost/serviciosChat/listadoMensajesP.php?email='+email)
  }

  mandarMensajePrivado(mensaje : Mensaje):Observable <Mensaje>{
    console.log(mensaje)
    return this.http.post<Mensaje>('http://localhost/serviciosChat/insertarmensajep.php',mensaje)
  }

  obtenerListadoUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost/serviciosChat/listadoUsuarios.php')
  }

  cambiarPwd(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost/serviciosChat/editarPwd.php',usuario)
  }
}
