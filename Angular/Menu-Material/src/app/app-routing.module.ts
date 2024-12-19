import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrecolComponent } from './brecol/brecol.component';
import { ColiflorComponent } from './coliflor/coliflor.component';
import { LombardaComponent } from './lombarda/lombarda.component';
import { RepolloComponent } from './repollo/repollo.component';

const routes: Routes = [
  {
    path : 'brecol',
    component : BrecolComponent
  },
  {
    path : 'coliflor',
    component : ColiflorComponent
  },
  {
    path : 'lombarda',
    component : LombardaComponent
  },
  {
    path : 'repollo',
    component : RepolloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
