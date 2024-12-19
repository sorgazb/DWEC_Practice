import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DAMComponent } from './dam/dam.component';
import { DAwComponent } from './daw/daw.component';
import { ASIRComponent } from './asir/asir.component';
import { DespliegueComponent } from './despliegue/despliegue.component';
import { DIWComponent } from './diw/diw.component';
import { DWECComponent } from './dwec/dwec.component';
import { DWESComponent } from './dwes/dwes.component';
import { BDComponent } from './bd/bd.component';
import { BIComponent } from './bi/bi.component';
import { PMMSComponent } from './pmms/pmms.component';
import { PSPComponent } from './psp/psp.component';
import { BDASIRComponent } from './bd-asir/bd-asir.component';
import { FHComponent } from './fh/fh.component';
import { LMComponent } from './lm/lm.component';
import { SORComponent } from './sor/sor.component';

@NgModule({
  declarations: [
    AppComponent,
    DAMComponent,
    DAwComponent,
    ASIRComponent,
    DespliegueComponent,
    DIWComponent,
    DWECComponent,
    DWESComponent,
    BDComponent,
    BIComponent,
    PMMSComponent,
    PSPComponent,
    BDASIRComponent,
    FHComponent,
    LMComponent,
    SORComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
