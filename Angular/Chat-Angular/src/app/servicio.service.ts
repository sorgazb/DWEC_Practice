import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatModule } from './chat/chat.module';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient:HttpClient) { }

  leerMensajes():Observable<ChatModule[]>{
    return this.httpClient.get<ChatModule[]>('http://camacho.atwebpages.com/chat/ObtenerMensajes.php')
  }

  crearMensaje(chat:ChatModule):Observable<ChatModule>{
    return this.httpClient.post<ChatModule>('http://camacho.atwebpages.com/chat/AltaMensaje.php',chat)
  }
}
