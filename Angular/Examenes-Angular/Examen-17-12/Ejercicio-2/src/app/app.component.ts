import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from './producto';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  dataSource = new MatTableDataSource<Producto>

  cabeceras : string[] = ['id','name','price','photo','activo','activo','stockActual','stockMinimo']

  datos : Producto[]=[]

  producto !: Producto

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private httpCliente: ServicioService) {
    this.httpCliente.leerProductos().subscribe((resultado:Producto[]) => {
      this.dataSource.data = resultado.filter(producto=>producto.stockActual > "0")
    })
  }

  ngOnInit(): void {
    this.httpCliente.leerProductos().subscribe((resultado:Producto[]) => {
      this.dataSource.data = resultado.filter(producto=>producto.stockActual > "0")
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
