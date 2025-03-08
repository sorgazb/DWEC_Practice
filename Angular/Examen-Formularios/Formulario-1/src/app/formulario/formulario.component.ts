import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  formulario !: FormGroup

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre : new FormControl('',[Validators.required,Validators.maxLength(20)]),
      email : new FormControl('',[Validators.required, Validators.pattern(/.*gmail.*/i)]),
      edad : new FormControl('',[Validators.required, Validators.min(18)]),
      puestoTrabajo : new FormControl ('', [Validators.required]),
      salario : new FormControl('',[Validators.required, Validators.min(900), Validators.max(1200)])
    })
  }

  public enviarFormulario(){
    alert('Datos correctos')
  }

}
