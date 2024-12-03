import { Component } from '@angular/core';
import { ChatModule } from '../chat/chat.module';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent {
  chat ! : ChatModule

  chatSeleccionado : ChatModule={
    id : 0,
    usuario : '',
    mensaje : '',
    fecha : ''
  }

  listaMensajes ! : ChatModule[]

  constructor(private httpCliente : ServicioService){
    this.httpCliente.leerMensajes().subscribe(x=>this.listaMensajes = x)
  }

  leerMensajes(){
    this.httpCliente.leerMensajes().subscribe(x=>this.listaMensajes = x)
  }

  aniadirMensaje(form:{value:ChatModule}) {
    this.httpCliente.crearMensaje(form.value).subscribe((c:ChatModule)=>{this.chat=c})
  }
}
