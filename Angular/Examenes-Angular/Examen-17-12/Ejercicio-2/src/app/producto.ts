export class Producto {
  id !: string
  name !: string
  price !: string
  photo !: string
  activo !: string
  stockActual !: string
  stockMinimo !: string

  constructor(id : string, name : string, price : string,
    photo : string, activo : string, stockActual : string, stockMinimo : string){
    this.id = id
    this.name = name
    this.price = price
    this.photo = photo
    this.activo = activo
    this.stockActual = stockActual
    this.stockMinimo = stockMinimo
  }
}
