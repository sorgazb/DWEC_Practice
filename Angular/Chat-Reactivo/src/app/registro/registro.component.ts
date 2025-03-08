import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario : Usuario = new Usuario('','','')
  confirmar : string = ""

  constructor(private http:ServicioService){

  }

  registrar() {
    if(this.confirmar == this.usuario.pwd){
      this.http.registarUsuario(this.usuario).subscribe((us:Usuario)=>this.usuario = us)
    }
  }

}
