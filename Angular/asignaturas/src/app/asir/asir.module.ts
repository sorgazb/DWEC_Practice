import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsirRoutingModule } from './asir-routing.module';
import { PmmsComponent } from './pmms/pmms.component';
import { DiComponent } from './di/di.component';


@NgModule({
  declarations: [
    PmmsComponent,
    DiComponent
  ],
  imports: [
    CommonModule,
    AsirRoutingModule
  ]
})
export class AsirModule { }
