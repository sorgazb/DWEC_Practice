import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  miFormulario !: FormGroup

  ngOnInit(): void {
      this.miFormulario = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        puestoTrabajo : new FormControl ('', [Validators.required]),
        fechaNacimiento : new FormControl('', [Validators.required]),
        password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('/^[A-Z].{8}[0-9]$/')]),
        password2 : new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('/^[A-Z].{8}[0-9]$/')])
      })
  }

  public controlarErrorres(NombreControl: string, NombreError: string) {
    return this.miFormulario.controls[NombreControl].hasError(NombreError);
  }

  public enviar() {
    alert('Datos correctos');
  }

  public comprobarPassword(){

  }
}
