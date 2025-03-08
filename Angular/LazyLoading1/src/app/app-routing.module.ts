import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HortalizaComponent } from './hortaliza/hortaliza.component';
import { FrutalComponent } from './frutal/frutal.component';
import { AromaticaComponent } from './aromatica/aromatica.component';

const routes: Routes = [
  {
    path: 'hortaliza',
    component: HortalizaComponent,
    loadChildren: () => import('./hortaliza/hortaliza.module').then(m => m.HortalizaModule)
  },
  {
    path: 'frutal',
    component: FrutalComponent,
    loadChildren: () => import('./frutal/frutal.module').then(m => m.FrutalModule)
  },
  {
    path: 'aromatica',
    component: AromaticaComponent,
    loadChildren: () => import('./aromatica/aromatica.module').then(m => m.AromaticaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
