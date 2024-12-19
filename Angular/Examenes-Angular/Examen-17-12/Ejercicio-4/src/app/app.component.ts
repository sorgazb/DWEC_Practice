import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fruta } from './fruta';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  dataSource = new MatTableDataSource<Fruta>

  cabeceras : string[] = ['nombre','precio']

  datos : Fruta[]=[]

  fruta !: Fruta

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private httpCliente: ServicioService) {
    this.httpCliente.leerFrutas().subscribe((data)=>{
      const frutas = this.httpCliente.procesarDatos(data)
    })
    // leerFrutas().subscribe((x) => { this.dataSource.data = x })
  }

  ngOnInit(): void {
    this.httpCliente.leerFrutas().subscribe((data)=>{
      this.dataSource.data = this.httpCliente.procesarDatos(data)
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
