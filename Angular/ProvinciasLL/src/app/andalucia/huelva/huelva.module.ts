import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuelvaRoutingModule } from './huelva-routing.module';
import { MoguerComponent } from './moguer/moguer.component';


@NgModule({
  declarations: [
    MoguerComponent
  ],
  imports: [
    CommonModule,
    HuelvaRoutingModule
  ]
})
export class HuelvaModule { }
