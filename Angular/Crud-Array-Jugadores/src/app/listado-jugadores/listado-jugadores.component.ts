import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Jugador } from '../jugador';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CuadroJugadorComponent } from '../cuadro-jugador/cuadro-jugador.component';

@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit, AfterViewInit{

  cabeceras: string[] = ['id', 'nombre', 'posicion', 'equipo', 'dorsal', 'borrar', 'modificar']

  jugador !: Jugador

  datosJugadores : Jugador[] = [
    {
      id: 1,
      nombre: "Lionel Messi",
      posicion: "Delantero",
      equipo: "Inter Miami",
      dorsal: 10
    },
    {
      id: 2,
      nombre: "Cristiano Ronaldo",
      posicion: "Delantero",
      equipo: "Al-Nassr",
      dorsal: 7
    },
    {
      id: 3,
      nombre: "Kylian Mbappé",
      posicion: "Delantero",
      equipo: "Real Madrid",
      dorsal: 7
    },
    {
      id: 4,
      nombre: "Kevin De Bruyne",
      posicion: "Centrocampista",
      equipo: "Manchester City",
      dorsal: 17
    },
    {
      id: 5,
      nombre: "Virgil van Dijk",
      posicion: "Defensa",
      equipo: "Liverpool",
      dorsal: 4
    },
    {
      id: 6,
      nombre: "Thibaut Courtois",
      posicion: "Portero",
      equipo: "Real Madrid",
      dorsal: 1
    },
    {
      id: 7,
      nombre: "Luka Modrić",
      posicion: "Centrocampista",
      equipo: "Real Madrid",
      dorsal: 10
    },
    {
      id: 8,
      nombre: "Erling Haaland",
      posicion: "Delantero",
      equipo: "Manchester City",
      dorsal: 9
    },
    {
      id: 9,
      nombre: "Neymar Jr.",
      posicion: "Delantero",
      equipo: "Al-Hilal",
      dorsal: 10
    },
    {
      id: 10,
      nombre: "Paulo Dybala",
      posicion: "Delantero",
      equipo: "AS Roma",
      dorsal: 21
    },
    {
      id: 11,
      nombre: "Vinícius Júnior",
      posicion: "Delantero",
      equipo: "Real Madrid",
      dorsal: 7
    }
  ]

  dataSource = new MatTableDataSource<Jugador>;

  tabla !: MatTable<Jugador>

  // @ViewChild(MatTable)
  // tabla1!: MatTable<Jugador>;
  // this.tabla1.renderRows();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog){
    this.dataSource.data = this.datosJugadores
  }

  ngOnInit(): void {
    
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

  crearJugador() {
    const dialogo1 = this.dialog.open(CuadroJugadorComponent, {
      data: new Jugador(0, '', '', '', 0)
    });

    dialogo1.afterClosed().subscribe(emp => {
      if (emp != undefined)
        this.agregar(emp);
    });
  }

  agregar(jugador: Jugador) {
    this.datosJugadores.push(new Jugador(jugador.id, jugador.nombre, jugador.posicion,jugador.equipo, jugador.dorsal));
    this.dataSource.data = [...this.datosJugadores]

  }

  modificarJugador(jugador: Jugador) {
    const dialogo1 = this.dialog.open(CuadroJugadorComponent, {
      data: new Jugador(jugador.id, jugador.nombre, jugador.posicion,jugador.equipo, jugador.dorsal)
    });

      dialogo1.afterClosed().subscribe((jugador:Jugador) => {
        if(jugador != undefined){
          let jugadorModificar = this.datosJugadores.find(jugador => jugador.id === jugador.id)
          if(jugadorModificar != null){
            jugadorModificar.nombre = jugador.nombre
            jugadorModificar.posicion = jugador.posicion
            jugadorModificar.equipo = jugador.equipo
            jugadorModificar.dorsal = jugador.dorsal
          }
        }
        this.dataSource.data = this.datosJugadores
      })
  }

  eliminarJugador(id: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      const index = this.datosJugadores.findIndex(item => item.id === id);
      if (index != null) {
        this.datosJugadores.splice(index, 1);
        this.dataSource.data = this.datosJugadores
      }
    }
  }

}
