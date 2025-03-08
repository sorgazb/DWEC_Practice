import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoguerComponent } from './moguer/moguer.component';

const routes: Routes = [
    { 
      path: 'moguer',
      component: MoguerComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuelvaRoutingModule { }
