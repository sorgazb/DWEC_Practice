import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { ServicioUserService } from '../servicio-user.service';
import { Route, Router } from '@angular/router';
import { ServiciolocaluService } from '../serviciolocalu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    formRegistro !: FormGroup;

    inicioSesion = false


    servicios !: any

    tipoServicios !: string

    ngOnInit(): void {
      this.formRegistro = new FormGroup({
        email: new FormControl('', [Validators.required]),
        pwd: new FormControl('', [Validators.required])
      })
      this.tipoServicios = "local"
      this.servicios = this.servicosLocales
      sessionStorage.setItem('nombreUs','')
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
    }

    loguearUsuario() {
      this.servicios.inicarSession(this.formRegistro.value).subscribe()
      sessionStorage.setItem('nombreUs',this.formRegistro.value.email),
      sessionStorage.setItem('servicio',this.tipoServicios)
      if (sessionStorage.getItem('nombreUs')=="admin@gmail.com"){
        this.route.navigate(['admin']);
        this.inicioSesion = true
      }else{
        this.route.navigate(['chat']);
        this.inicioSesion = true
      }
    }
}
