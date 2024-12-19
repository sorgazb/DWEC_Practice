export class Imagen {
  id !: string
  imagen !: string
  texto !: string
  subtexto !: string
  activo !: string

  constructor(id : string, imagen : string, texto : string, subtexto : string, activo : string){
    this.id = id
    this.imagen = imagen
    this.texto = texto
    this.subtexto = subtexto
    this.activo = activo
  }
}
