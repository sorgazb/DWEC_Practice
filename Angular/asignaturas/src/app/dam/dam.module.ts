import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamRoutingModule } from './dam-routing.module';
import { BdComponent } from './bd/bd.component';
import { PspComponent } from './psp/psp.component';


@NgModule({
  declarations: [
    BdComponent,
    PspComponent
  ],
  imports: [
    CommonModule,
    DamRoutingModule
  ]
})
export class DamModule { }
