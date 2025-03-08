import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaComponent } from './andalucia/andalucia.component';
import { ExtremaduraComponent } from './extremadura/extremadura.component';
import { CastillaLeonComponent } from './castilla-leon/castilla-leon.component';

const routes: Routes = [
  {
    path: 'andalucia',
    component: AndaluciaComponent,
    loadChildren: () => import('./andalucia/andalucia.module').then(m => m.AndaluciaModule)
  },
  {
    path: 'extremadura',
    component: ExtremaduraComponent,
    loadChildren: () => import('./extremadura/extremadura.module').then(m => m.ExtremaduraModule)
  },
  {
    path: 'castillaleon',
    component: CastillaLeonComponent,
    loadChildren: () => import('./castilla-leon/castilla-leon.module').then(m => m.CastillaLeonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
