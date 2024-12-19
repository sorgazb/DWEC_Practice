import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import { ServicioEmpService } from '../servicio-emp.service'
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoEmpleadoComponent } from '../cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit, AfterViewInit {

  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'imagen', 'borrar', 'modificar']

  empleado !: Empleado

  datos: Empleado[] = []

  dataSource = new MatTableDataSource<Empleado>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog, private httpCliente: ServicioEmpService) {
    this.httpCliente.leerEmpleados().subscribe((x) => { this.dataSource.data = x })
  }

  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x) => { this.dataSource.data = x })
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


  eliminarEmpleado(id: number) {
    this.httpCliente.eliminarEmpleado(id).subscribe((x:Empleado) => {
      this.empleado = x
    })
  }

  crearEmpleado() {
    const dialogo1 = this.dialog.open(CuadroDialogoEmpleadoComponent, {
      data: new Empleado(0, '', '', '', 0, '')
    });

    dialogo1.afterClosed().subscribe(emp => {
      if (emp != undefined)
        this.agregar(emp);
    });
  }

  agregar(emp: Empleado) {
    //agregar a la lista
    this.datos.push(new Empleado(emp.id, emp.nombre, emp.direccion,
      emp.cargo, emp.edad, emp.imagen));
    //agregar a la tabla
    this.httpCliente.insertarEmpleado(emp).subscribe((resultado:Empleado) => {
      this.empleado = resultado
      this.dataSource.data = [...this.datos]
    });
  }

  modificarEmpleado(emp: Empleado) {
    const dialogo1 = this.dialog.open(CuadroDialogoEmpleadoComponent, {
      data: new Empleado(emp.id,emp.nombre,emp.direccion,emp.cargo, emp.edad,emp.imagen)});
    
      dialogo1.afterClosed().subscribe(x => {
        if (x != undefined) {
          this.httpCliente.modificarEmpleado(x).subscribe(resultado => this.empleado);
        }
      })
  }
}