import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServicioUserService } from '../servicio-user.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { ServiciolocaluService } from '../serviciolocalu.service';

@Component({
  selector: 'app-chat-privado',
  templateUrl: './chat-privado.component.html',
  styleUrls: ['./chat-privado.component.css']
})
export class ChatPrivadoComponent {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort !: MatSort;

    servicos !: any

    usuario !: Usuario

    nombreUs !: string|null

    cabecera: string [] = ['id', 'usuario', 'fecha', 'mensaje', 'destinatario']

    dataSource = new MatTableDataSource<Mensaje>

    mensajeNuevo : Mensaje = {id:0,usuario:'',fecha:'',mensaje:'',destinatario:'', activo:1}

    listadoUsuarios !: Usuario[]

    ngOnInit(): void {
      if(sessionStorage.getItem('servicio')== 'local'){
        this.servicos = this.servicosLocales
      }else{
        this.servicos = this.serviciosOnline
      }
      this.nombreUs = sessionStorage.getItem('nombreUs');
      if(this.nombreUs == null){
        this.dataSource = new MatTableDataSource<Mensaje>()
      }else{
        this.servicos.leerMensajesPrivados(this.nombreUs).subscribe((x: Mensaje[])=>this.dataSource.data = x)
        this.servicos.obtenerListadoUsuarios().subscribe((x:Usuario[])=>{
          this.listadoUsuarios=x
        })
      }
    }

    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    constructor(private servicosLocales: ServiciolocaluService, private serviciosOnline : ServicioUserService,private route:Router) {

    }
  

    filtar(event: KeyboardEvent) {
      const filtro = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filtro.trim().toLowerCase();
    }

    cerrarSesion(){
      sessionStorage.removeItem('Nombre');
      this.nombreUs='Sesion cerrada'
      this.dataSource = new MatTableDataSource<Mensaje>()
      this.route.navigate(['login'])
    }

    aniadirMensaje() {
      this.mensajeNuevo.usuario = this.nombreUs!
      this.mensajeNuevo.fecha = new Date().toLocaleString()
      this.servicos.mandarMensajePrivado(this.mensajeNuevo).subscribe()
    }

    recargar(){
      this.servicos.leerMensajesPrivados(this.nombreUs).subscribe((x: Mensaje[])=>this.dataSource.data = x)
    }

}
