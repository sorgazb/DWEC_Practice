import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Btn1Component } from './btn1/btn1.component';
import { Btn2Component } from './btn2/btn2.component';
import { Btn3Component } from './btn3/btn3.component';
import { Btn4Component } from './btn4/btn4.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Btn1Component,
    Btn2Component,
    Btn3Component,
    Btn4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
