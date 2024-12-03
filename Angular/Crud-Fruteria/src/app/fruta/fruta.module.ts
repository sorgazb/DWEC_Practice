import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FrutaModule {
  id! : number;
  nombre! : string;
  precio! : number;
  unidades! : number;
  imagen! : string;
}
