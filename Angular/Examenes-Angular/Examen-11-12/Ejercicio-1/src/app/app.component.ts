import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CuadroDialogoComponent } from './cuadro-dialogo/cuadro-dialogo.component';
import { Numero } from './numero';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  cabeceras: string[] = ['indice', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'borrar', 'modificar']

  numero ! : Numero

  datos:Numero[] = []

  dataSource = new MatTableDataSource<Numero>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.datos = this.httpCliente.retornarLista()
    this.dataSource.data = this.datos
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(public dialog: MatDialog, private httpCliente: ServicioService) {
    this.datos = this.httpCliente.retornarLista()
    this.dataSource.data = this.datos
  }

  buscador(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  nuevaTupla() {
    const dialogo1 = this.dialog.open(CuadroDialogoComponent, {
      data: new Numero(0, 0, 0, 0, 0, 0, 0)
    });
    dialogo1.afterClosed().subscribe(num => {
      if (num != undefined)
        this.agregar(num);
    });
  }
  agregar(num:Numero) {
      //agregar a la lista
      let nuevo = (new Numero(num.indice, num.n1, num.n2,
          num.n3, num.n4, num.n5, num.n6));
        //agregar a la tabla
        this.httpCliente.insertarElemento(nuevo)
        this.dataSource.data = this.datos

  }

  modificarTupla(num: Numero) {
    const dialogo1 = this.dialog.open(CuadroDialogoComponent, {
      data: new Numero(num.indice,num.n1,num.n2,num.n3,num.n4,num.n5,num.n6)});

      dialogo1.afterClosed().subscribe(num => {
        if (num != undefined)
          this.httpCliente.actualizarTupla(num);
      });
      this.dataSource.data = this.datos
  }

  eliminarTupla(num: Numero) {
    this.httpCliente.eliminarElemento(num)
    this.dataSource.data = this.datos
  }



}
