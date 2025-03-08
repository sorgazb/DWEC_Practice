import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuelvaComponent } from './huelva/huelva.component';

const routes: Routes = [
  { 
    path: 'huelva',
    component: HuelvaComponent,
    loadChildren: () => import('./huelva/huelva.module').then(m => m.HuelvaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndaluciaRoutingModule { }
