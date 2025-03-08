export class Usuario {

  idUsuario !: number
  nombre !: string
  email !: string
  pwd !: string
  activo !: number

  constructor(nombre : string, email : string, pwd : string){
    this.nombre = nombre
    this.email = email
    this.pwd = pwd
  }
}
