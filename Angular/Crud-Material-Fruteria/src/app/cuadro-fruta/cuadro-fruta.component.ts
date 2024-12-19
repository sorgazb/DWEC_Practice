import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Frutas } from '../frutas';

@Component({
  selector: 'app-cuadro-fruta',
  templateUrl: './cuadro-fruta.component.html',
  styleUrls: ['./cuadro-fruta.component.css']
})
export class CuadroFrutaComponent {
  constructor(public dialogRef: MatDialogRef<CuadroFrutaComponent>, @Inject(MAT_DIALOG_DATA) public data: Frutas) { }
  cancelar() {
    this.dialogRef.close();
  }

}
