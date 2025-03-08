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
      soloLetras : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
      soloNumeros : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
      soloMayusculas : new FormControl('',[Validators.required, Validators.pattern(/^[A-Z]+$/)]),
      rangoNumerico : new FormControl('',[Validators.required, Validators.min(100), Validators.max(200)]),
      cincoNumeros : new FormControl('',[Validators.required, Validators.pattern(/^\d{5}$/)]),
      diezLetras : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]{10}$/)])
    })
  }

  public enviarFormulario(){
    alert('Datos correctos')
  }

}
