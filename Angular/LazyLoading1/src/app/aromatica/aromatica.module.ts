import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AromaticaRoutingModule } from './aromatica-routing.module';
import { TomilloComponent } from './tomillo/tomillo.component';
import { MentaComponent } from './menta/menta.component';
import { PerejilComponent } from './perejil/perejil.component';


@NgModule({
  declarations: [
    TomilloComponent,
    MentaComponent,
    PerejilComponent
  ],
  imports: [
    CommonModule,
    AromaticaRoutingModule
  ]
})
export class AromaticaModule { }
