import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { CuadroDialogoComponent } from './cuadro-dialogo/cuadro-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    CuadroDialogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
