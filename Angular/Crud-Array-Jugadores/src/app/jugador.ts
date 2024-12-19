export class Jugador {
    id : number = 0
    nombre : string = ''
    posicion : string = ''
    equipo : string = ''
    dorsal : number = 0

    constructor (id:number, nombre:string, posicion:string, equipo:string, dorsal:number){
        this.id = id
        this.nombre = nombre
        this.posicion = posicion
        this.equipo = equipo
        this.dorsal = dorsal
    }
}
