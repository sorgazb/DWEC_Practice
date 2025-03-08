import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiComponent } from './di/di.component';
import { PmmsComponent } from './pmms/pmms.component';

const routes: Routes = [
  {
    path: 'di',
    component: DiComponent
  },
  {
    path: 'pmms',
    component: PmmsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsirRoutingModule { }
