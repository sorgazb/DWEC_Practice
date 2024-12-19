import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-cuadro-jugador',
  templateUrl: './cuadro-jugador.component.html',
  styleUrls: ['./cuadro-jugador.component.css']
})
export class CuadroJugadorComponent {
  constructor(public dialogRef: MatDialogRef<CuadroJugadorComponent>, @Inject(MAT_DIALOG_DATA) public data: Jugador) { }

  cancelar() {
    this.dialogRef.close();
  }
}
