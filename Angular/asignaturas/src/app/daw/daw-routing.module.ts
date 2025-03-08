import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DwecComponent } from './dwec/dwec.component';
import { DwesComponent } from './dwes/dwes.component';

const routes: Routes = [
  {
    path: 'dwec',
    component: DwecComponent
  },
  {
    path: 'dwes',
    component: DwesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DawRoutingModule { }
