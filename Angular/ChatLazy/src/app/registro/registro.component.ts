import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioUserService } from '../servicio-user.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServiciolocaluService } from '../serviciolocalu.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formRegistro !: FormGroup;

  usuario !: Usuario

  servicios !: any

  tipoServicios !: string

  inicioSesion = false

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required]),
    })
    this.tipoServicios = "local"
    this.servicios = this.servicosLocales
    console.log(this.servicios)
  }

  constructor(private servicosLocales: ServiciolocaluService, private serviciosOnline : ServicioUserService,private route:Router) {

  }

  cambiarServicios(tipo:string){
    this.tipoServicios = tipo
    if(this.tipoServicios == "local"){
      this.servicios = this.servicosLocales
    }else if(this.tipoServicios == "online"){
      this.servicios = this.serviciosOnline
    }
    console.log(this.tipoServicios)
    console.log(this.servicios)
  }

  registrarUsuario() {
    this.servicios.insertarUsuario(this.formRegistro.value).subscribe((x:Usuario) => {
      this.usuario = x
    })
    alert("Usuario registrado correctamente")
    this.route.navigate(['login'])
    this.inicioSesion = true
    sessionStorage.setItem('servicio',this.tipoServicios)
  }

}
