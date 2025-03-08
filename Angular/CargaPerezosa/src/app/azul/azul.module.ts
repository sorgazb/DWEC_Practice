import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AzulRoutingModule } from './azul-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AzulRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class AzulModule { }
