import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Frutas } from '../frutas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ServicioFruteriaService } from '../servicio-fruteria.service';
import { CuadroFrutaComponent } from '../cuadro-fruta/cuadro-fruta.component';

@Component({
  selector: 'app-listado-fruteria',
  templateUrl: './listado-fruteria.component.html',
  styleUrls: ['./listado-fruteria.component.css']
})
export class ListadoFruteriaComponent implements OnInit, AfterViewInit{

  cabecera: string [] = ['id', 'nombre', 'precio', 'unidades', 'imagen', 'acciones']

  fruta ! : Frutas

  datosFruta : Frutas [] = []

  dataSource = new MatTableDataSource<Frutas>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog, private httpCliente: ServicioFruteriaService) {
    this.httpCliente.cargarFrutas().subscribe((x) => { this.dataSource.data = x })
  }

  ngOnInit(): void {
    this.httpCliente.cargarFrutas().subscribe((x) => { this.dataSource.data = x })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filtar(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  eliminarFruta(id : number) {
    this.httpCliente.eliminarFruta(id).subscribe((x:Frutas) => {
      this.fruta = x
    })
  }

  modificarFruta(fruta: Frutas) {
    const dialogo1 = this.dialog.open(CuadroFrutaComponent, {
      data: new Frutas(fruta.id, fruta.nombre, fruta.precio, fruta.unidades, fruta.imagen)});
      dialogo1.afterClosed().subscribe(x => {
        if (x != undefined) {
          this.httpCliente.modificarFruta(x).subscribe(resultado => this.fruta);
        }
      })
  }

  aniadirFruta() {
    const dialogo1 = this.dialog.open(CuadroFrutaComponent, {
      data: new Frutas('', '', 0, 0, '')
    });

    dialogo1.afterClosed().subscribe(emp => {
      if (emp != undefined)
        this.agregar(emp);
    });
  }

  agregar(fruta: Frutas) {
    //agregar a la lista
    this.datosFruta.push(new Frutas(fruta.id, fruta.nombre, fruta.precio, fruta.unidades, fruta.imagen));
    //agregar a la tabla
    this.httpCliente.insertarFruta(fruta).subscribe((resultado:Frutas) => {
      this.fruta = resultado
      this.dataSource.data = [...this.datosFruta]
    });
  }


}
