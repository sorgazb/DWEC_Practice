import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DawComponent } from './daw/daw.component';
import { DamComponent } from './dam/dam.component';
import { AsirComponent } from './asir/asir.component';

const routes: Routes = [
  {
    path: 'daw',
    component: DawComponent,
    loadChildren: () => import('./daw/daw.module').then(m => m.DawModule)
  },
  {
    path: 'dam',
    component: DamComponent,
    loadChildren: () => import('./dam/dam.module').then(m => m.DamModule)
  },
  {
    path: 'asir',
    component: AsirComponent,
    loadChildren: () => import('./asir/asir.module').then(m => m.AsirModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
