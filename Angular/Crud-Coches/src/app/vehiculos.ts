export class Vehiculos {
    id : number = 0
    make_and_model : string = ''
    color : string = ''
    transmission : string = ''
    fuel_type : string = ''
    doors : number = 0
    kilometrage : number = 0

    constructor(id:number, make_and_model:string,
        color:string, transmission:string, fuel_type:string,
        doors:number, kilometrage:number
    ){
        this.id = id
        this.make_and_model = make_and_model
        this.color = color
        this.transmission = transmission
        this.fuel_type = fuel_type
        this.doors = doors
        this.kilometrage = kilometrage
    }
}
