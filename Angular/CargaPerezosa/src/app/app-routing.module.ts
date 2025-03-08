import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RojoComponent } from './rojo/rojo.component';
import { VerdeComponent } from './verde/verde.component';
import { AzulComponent } from './azul/azul.component';

const routes: Routes = [
  {
    path: 'rojo',
    component: RojoComponent,
    loadChildren: () => import('./rojo/rojo.module').then(m => m.RojoModule)
  },
  {
    path: 'verde',
    component: VerdeComponent,
    loadChildren: () => import ('./verde/verde.module').then(m => m.VerdeModule)
  },
  {
    path: 'azul',
    component: AzulComponent,
    loadChildren: () => import ('./azul/azul.module').then(m => m.AzulModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
