import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializar el formulario con controles y validaciones
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      apellido: ['', [Validators.required, Validators.maxLength(20)]],
      visa: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(20), Validators.pattern('^\\d{20}$')]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$')]],
    });
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.miFormulario.valid) {
      alert ('Formulario enviado correctamente');
    }
  }
    

}
