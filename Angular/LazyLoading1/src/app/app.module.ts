import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HortalizaComponent } from './hortaliza/hortaliza.component';
import { HuertoComponent } from './huerto/huerto.component';
import { FrutalComponent } from './frutal/frutal.component';
import { AromaticaComponent } from './aromatica/aromatica.component';

@NgModule({
  declarations: [
    AppComponent,
    HortalizaComponent,
    HuertoComponent,
    FrutalComponent,
    AromaticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
