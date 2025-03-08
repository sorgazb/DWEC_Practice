import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServicioAdminService } from '../servicio-admin.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { ServiciolocaleaService } from '../serviciolocalea.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,AfterViewInit{

    @ViewChild('paginator') paginator!: MatPaginator;
    @ViewChild(MatSort) sort !: MatSort;

    @ViewChild('paginator2') paginator2!: MatPaginator;
    @ViewChild(MatSort) sort2 !: MatSort;

    servicos !: any

    nombreUs !: string|null

    cabecera: string [] = ['id', 'usuario', 'fecha', 'mensaje', 'destinatario', 'activo', 'acciones']
    cabecera2: string [] = ['nombre', 'email', 'pwd', 'activo', 'acciones']
    dataSource = new MatTableDataSource<Mensaje>
    dataSource2 = new MatTableDataSource<Usuario>

    ngOnInit(): void {
      if(sessionStorage.getItem('servicio')== 'local'){
        this.servicos = this.serviciosLocales
      }else{
        this.servicos = this.serviciosOnline
      }
      this.nombreUs = sessionStorage.getItem('nombreUs');
      if(this.nombreUs == null){
        this.dataSource = new MatTableDataSource<Mensaje>()
        this.dataSource2 = new MatTableDataSource<Usuario>()
      }else{
        this.servicos.obtenerMensajesAdmin().subscribe((x: Mensaje[])=>this.dataSource.data = x)
        this.servicos.obtenerUsuarios().subscribe((x: Usuario[])=>this.dataSource2.data = x)
      }
    }

    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.dataSource2.paginator = this.paginator2
      this.dataSource2.sort = this.sort2

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
      if (this.dataSource2.paginator) {
        this.dataSource2.paginator.firstPage();
      }
    }

    constructor(private serviciosOnline : ServicioAdminService,private serviciosLocales : ServiciolocaleaService, private route:Router){
    }

    filtar(event: KeyboardEvent) {
      const filtro = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filtro.trim().toLowerCase();
      this.dataSource2.filter = filtro.trim().toLowerCase();
    }

    cerrarSesion(){
      sessionStorage.removeItem('Nombre');
      this.nombreUs='Sesion cerrada'
      this.dataSource = new MatTableDataSource<Mensaje>()
      this.dataSource2 = new MatTableDataSource<Usuario>()
      this.route.navigate(['login'])
    }

    refrescar(){
      this.servicos.obtenerMensajesAdmin().subscribe((x: Mensaje[])=>this.dataSource.data = x)
      this.servicos.obtenerUsuarios().subscribe((x: Usuario[])=>this.dataSource2.data = x)
    }

    activarM(mensaje : Mensaje){
      this.servicos.activarMensaje(mensaje).subscribe((resultado:Mensaje)=>{
      },()=>{
        this.refrescar();
        alert('Mensaje Activado')
      })
    }

    bloquearM(mensaje : Mensaje){
      this.servicos.bloquearMensaje(mensaje).subscribe((resultado:Mensaje)=>{
      },()=>{
        this.refrescar();
        alert('Mensaje Activado')
      })
    }

    activarU(usuario : Usuario){
      this.servicos.activarUsuario(usuario).subscribe((resultado:Usuario)=>{
      },()=>{
        this.refrescar();
        alert('Usuario Activado')
      })
    }

    bloquearU(usuario : Usuario){
      this.servicos.bloquearUsuario(usuario).subscribe((resultado:Usuario)=>{
      },()=>{
        this.refrescar();
        alert('Usuario Activado')
      })
    }
}
