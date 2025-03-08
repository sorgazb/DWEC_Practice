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
      visa : new FormControl('',[Validators.required,Validators.pattern('^4[0-9]{12}(?:[0-9]{3})?$')]),
      masterCard : new FormControl('',[Validators.required, Validators.pattern('^5[1-5][0-9]{14}$')]),
      americanExpress : new FormControl('',[Validators.required, Validators.pattern('^3[47][0-9]{13}$')]),
      discover : new FormControl('',[Validators.required, Validators.pattern('^6(?:011|5[0-9]{2})[0-9]{12}$')]),
      dinersClub : new FormControl('',[Validators.required, Validators.pattern('^3(?:0[0-5]|[68][0-9])[0-9]{11}$')]),
      jcb : new FormControl('',[Validators.required, Validators.pattern('^(?:2131|1800|35\\d{3})\\d{11}$')])
    })
  }

  public enviarFormulario(){
    alert('Datos correctos')
  }

}
