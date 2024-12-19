import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DAwComponent } from './daw/daw.component';
import { DAMComponent } from './dam/dam.component';
import { ASIRComponent } from './asir/asir.component';

import { DWECComponent } from './dwec/dwec.component';
import { DWESComponent } from './dwes/dwes.component';
import { DIWComponent } from './diw/diw.component';
import { DespliegueComponent } from './despliegue/despliegue.component';
import { BDComponent } from './bd/bd.component';
import { BIComponent } from './bi/bi.component';
import { PMMSComponent } from './pmms/pmms.component';
import { PSPComponent } from './psp/psp.component';
import { SORComponent } from './sor/sor.component';
import { LMComponent } from './lm/lm.component';
import { FHComponent } from './fh/fh.component';
import { BDASIRComponent } from './bd-asir/bd-asir.component';

const routes: Routes = [
  { path: '', redirectTo: '/daw', pathMatch: 'full' }, // Redirección inicial
  {
    path: 'daw',
    component: DAwComponent,
    children: [
      { path: 'dwec', component: DWECComponent },
      { path: 'dwes', component: DWESComponent },
      { path: 'diw', component: DIWComponent },
      { path: 'despliegue', component: DespliegueComponent },
    ]
  },
  {
    path: 'dam',
    component: DAMComponent,
    children: [
      { path: 'bd', component: BDComponent },
      { path: 'bi', component: BIComponent },
      { path: 'pmms', component: PMMSComponent },
      { path: 'psp', component: PSPComponent },
    ]
  },
  {
    path: 'asir',
    component: ASIRComponent,
    children: [
      { path: 'sor', component: SORComponent },
      { path: 'lm', component: LMComponent },
      { path: 'fh', component: FHComponent },
      { path: 'bd-asir', component: BDASIRComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
