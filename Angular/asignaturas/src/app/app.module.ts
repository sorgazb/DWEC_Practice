import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DawComponent } from './daw/daw.component';
import { DamComponent } from './dam/dam.component';
import { AsirComponent } from './asir/asir.component';

@NgModule({
  declarations: [
    AppComponent,
    DawComponent,
    DamComponent,
    AsirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
