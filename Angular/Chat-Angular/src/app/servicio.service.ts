import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatModule } from './chat/chat.module';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient:HttpClient,@Inject(LOCALE_ID) private locale:string) { }

  leerMensajes():Observable<ChatModule[]>{
    return this.httpClient.get<ChatModule[]>('http://camacho.atwebpages.com/chat/ObtenerMensajes.php')
  }

  crearMensaje(chat:ChatModule):Observable<ChatModule>{
    chat.fecha = formatDate(Date.now(),'HH:mm:ss/dd-MM-yy',this.locale)
    return this.httpClient.post<ChatModule>('http://camacho.atwebpages.com/chat/AltaMensaje.php',chat)
  }

  eliminarMensajes():Observable<ChatModule[]>{
    return this.httpClient.delete<ChatModule[]>('http://camacho.atwebpages.com/chat/truncate.php')
  }

  eliminarMensaje(id:number){
    return this.httpClient.delete<ChatModule>('http://camacho.atwebpages.com/chat/EliminarMensaje.php/?id='+id)
  }
}
