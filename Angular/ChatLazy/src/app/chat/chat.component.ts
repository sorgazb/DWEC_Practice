import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChatModule } from './chat.module';
import { ServicioUserService } from '../servicio-user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { ServiciolocaluService } from '../serviciolocalu.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  servicos !: any

  nombreUs !: string|null

  cabecera: string [] = ['id', 'usuario', 'fecha', 'mensaje']

  dataSource = new MatTableDataSource<Mensaje>

  mensajeNuevo : Mensaje = {id:0,usuario:'',fecha:'',mensaje:'',destinatario:'Todos', activo:1}

  usuario : Usuario ={
    nombre : '',
    email:'',
    pwd:'',
    activo:1
  }

  nuevaPWD !: string

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
      this.servicos.leerMensajes().subscribe((x: Mensaje[])=>this.dataSource.data = x)
    }
    console.log(sessionStorage.getItem('nombreUs'))
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
    sessionStorage.removeItem('nombreUs');
    this.nombreUs='Sesion cerrada'
    this.dataSource = new MatTableDataSource<Mensaje>()
    this.route.navigate(['login'])
  }

  aniadirMensaje() {
    this.mensajeNuevo.usuario = this.nombreUs!
    this.mensajeNuevo.fecha = new Date().toLocaleString()
    this.servicos.mandarMensajeGlobal(this.mensajeNuevo).subscribe()
  }

  recargar(){
    this.servicos.leerMensajes().subscribe((x: Mensaje[])=>this.dataSource.data = x)
  }

  cambiarPWD(){
    this.usuario.email = this.nombreUs || '';
    this.usuario.pwd = this.nuevaPWD
    console.log(this.usuario)
    this.servicos.cambiarPwd(this.usuario).subscribe()
    alert('Contraseña cambiada')
    this.cerrarSesion()
  }
}
