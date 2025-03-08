import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CirueloComponent } from './ciruelo/ciruelo.component';
import { ManzanoComponent } from './manzano/manzano.component';
import { PeralComponent } from './peral/peral.component';

const routes: Routes = [
    {
      path: 'ciruelo',
      component: CirueloComponent
    },
    {
      path: 'manzano',
      component: ManzanoComponent
    },
    {
      path: 'peral',
      component: PeralComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutalRoutingModule { }
