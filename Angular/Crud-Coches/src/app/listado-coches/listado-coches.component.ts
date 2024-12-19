import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Vehiculos } from '../vehiculos';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicioCochesService } from '../servicio-coches.service';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent implements OnInit, AfterViewInit{

  cabeceras : string [] = ['id', 'make_and_model', 'color', 'transmission', 'fuel_type', 'doors', 'kilometrage']

  coche ! : Vehiculos

  datosCoche : Vehiculos [] = []

  dataSource = new MatTableDataSource<Vehiculos>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private httpCliente: ServicioCochesService) {
    this.httpCliente.leerVehiculos().subscribe((x) => { this.dataSource.data = x })
  }

  ngOnInit(): void {
    this.httpCliente.leerVehiculos().subscribe((x) => { this.dataSource.data = x })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filtrar(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

}