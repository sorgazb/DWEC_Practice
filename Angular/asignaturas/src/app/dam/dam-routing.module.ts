import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BdComponent } from './bd/bd.component';
import { PspComponent } from './psp/psp.component';

const routes: Routes = [
  {
    path: 'bd',
    component: BdComponent
  },
  {
    path: 'psp',
    component: PspComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamRoutingModule { }
