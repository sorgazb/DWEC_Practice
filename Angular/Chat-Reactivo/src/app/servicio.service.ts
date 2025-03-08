import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  registarUsuario(u : Usuario):Observable<Usuario> {
    return this.http.post<Usuario>("http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php",u)
  }
}
