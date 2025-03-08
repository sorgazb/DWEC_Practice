import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AndaluciaRoutingModule } from './andalucia-routing.module';
import { HuelvaComponent } from '../andalucia/huelva/huelva.component';


@NgModule({
  declarations: [
    HuelvaComponent
  ],
  imports: [
    CommonModule,
    AndaluciaRoutingModule
  ]
})
export class AndaluciaModule { }
