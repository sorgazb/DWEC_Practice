import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentaComponent } from './menta/menta.component';
import { PerejilComponent } from './perejil/perejil.component';
import { TomilloComponent } from './tomillo/tomillo.component';

const routes: Routes = [
      {
        path: 'menta',
        component: MentaComponent
      },
      {
        path: 'perejil',
        component: PerejilComponent
      },
      {
        path: 'tomillo',
        component: TomilloComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AromaticaRoutingModule { }
