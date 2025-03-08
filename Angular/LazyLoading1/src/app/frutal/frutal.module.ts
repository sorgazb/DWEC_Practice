import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { CirueloComponent } from './ciruelo/ciruelo.component';
import { ManzanoComponent } from './manzano/manzano.component';
import { PeralComponent } from './peral/peral.component';


@NgModule({
  declarations: [
    CirueloComponent,
    ManzanoComponent,
    PeralComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
