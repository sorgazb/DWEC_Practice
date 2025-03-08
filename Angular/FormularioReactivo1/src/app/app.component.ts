import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  formulario1!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario1=this.fb.group({
      nombre:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$')]]
    })
    
  }

  enviarDatos() {
    alert ("Datos correctos")
  }

}
