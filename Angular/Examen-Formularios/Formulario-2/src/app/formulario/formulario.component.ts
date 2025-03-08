import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  formulario !: FormGroup

  fechaInvalida = false;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      hotel : new FormControl ('', [Validators.required]),
      fechaEntrada : new FormControl ('', [Validators.required]),
      fechaSalida : new FormControl ('', [Validators.required])
    })
  }

  public enviarFormulario(){
    this.validarFechas(this.formulario)
    if(this.fechaInvalida == true){
      alert('Datos correctos')
    }
  }

  validarFechas(form: FormGroup) {
    const fechaEntrada = form.get('fechaEntrada')?.value
    const fechaSalida = form.get('fechaSalida')?.value
    const fEntrada = new Date(fechaEntrada);
    const fSalida = new Date(fechaSalida);

    if (fSalida > fEntrada) {
      this.fechaInvalida = true;
      return;
    }
  }
}
