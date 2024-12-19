import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Imagen } from './imagen';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  dataSource = new MatTableDataSource<Imagen>

  cabeceras : string[] = ['id','imagen','texto','subtexto','activo']

  datos : Imagen[]=[]

  imagen !: Imagen

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private httpCliente: ServicioService) {
    this.httpCliente.leerImagenes().subscribe((resultado:Imagen[]) => {
      this.dataSource.data = resultado.filter(imagen=>imagen.activo == "1")
    })
  }

  ngOnInit(): void {
    this.httpCliente.leerImagenes().subscribe((resultado:Imagen[]) => {
      this.dataSource.data = resultado.filter(imagen=>imagen.activo == "1")
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  buscador(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
