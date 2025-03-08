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
        nombre : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        apellidos : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$')])
      })
  }

  public controlarErrorres(NombreControl: string, NombreError: string) {
    return this.miFormulario.controls[NombreControl].hasError(NombreError);
  }

  public enviar() {
    alert('Datos correctos');
  }
}
