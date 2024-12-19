import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Numero } from '../numero';

@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadro-dialogo.component.html',
  styleUrls: ['./cuadro-dialogo.component.css']
})
export class CuadroDialogoComponent {
  constructor(public dialogRef: MatDialogRef<CuadroDialogoComponent>, @Inject(MAT_DIALOG_DATA) public data: Numero) { }

  cancelar() {
    this.dialogRef.close();
  }
}
