import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Empleado } from '../empleado';

@Component({
  selector: 'app-cuadro-dialogo-empleado',
  templateUrl: './cuadro-dialogo-empleado.component.html',
  styleUrls: ['./cuadro-dialogo-empleado.component.css']
})
export class CuadroDialogoEmpleadoComponent {

  constructor(public dialogRef: MatDialogRef<CuadroDialogoEmpleadoComponent>, @Inject(MAT_DIALOG_DATA) public data: Empleado) { }

  cancelar() {
    this.dialogRef.close();
  }

}
