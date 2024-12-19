import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listadoColores ! : string [];

  constructor(private httpCliente: ServicioService){
    this.httpCliente.listadoColores().subscribe((data)=>{
      this.listadoColores = data.split(',')
    })
  }
}
