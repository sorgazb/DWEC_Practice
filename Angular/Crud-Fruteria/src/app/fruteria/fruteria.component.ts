import { Component } from '@angular/core';
import { FrutaModule } from '../fruta/fruta.module';
import { ServFrutaService } from '../serv-fruta.service';

@Component({
  selector: 'app-fruteria',
  templateUrl: './fruteria.component.html',
  styleUrls: ['./fruteria.component.css']
})
export class FruteriaComponent {

  mensajes ! : ''
  fruta! : FrutaModule
  frutaSeleccionada : FrutaModule={
    id : 0,
    nombre : '',
    precio : 0,
    unidades : 0,
    imagen : ''
  }

  listaFrutas! : FrutaModule[]
  constructor (private httpCliente:ServFrutaService){
    this.httpCliente.leerFrutas().subscribe(x=>this.listaFrutas = x)
  }

  actualizarProducto(form:{value:FrutaModule}) {
    this.httpCliente.actualizarFruta(form.value).subscribe((f:FrutaModule)=>{this.fruta = f;
      this.httpCliente.leerFrutas().subscribe(f=>this.listaFrutas = f)})
  }

  aniadirProducto(form:{value:FrutaModule}) {
    this.httpCliente.crearFruta(form.value).subscribe((p:FrutaModule)=>{this.fruta=p})
  }

  eliminar(id: number) {
    this.httpCliente.eliminarFruta(id).subscribe((x:FrutaModule)=>{this.fruta=x;
      this.httpCliente.leerFrutas().subscribe(x=>this.listaFrutas = x)})
  }

  modificar(f:FrutaModule) {
    this.frutaSeleccionada = f
  }

  resetearFormulario() {

  }
}
