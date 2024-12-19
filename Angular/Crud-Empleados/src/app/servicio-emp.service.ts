import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpService {

  constructor(private httpCliente:HttpClient) { }

  leerEmpleados(){
    return this.httpCliente.get<Empleado[]>("http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php")
  }

  insertarEmpleado(emp : Empleado):Observable<Empleado>{
    return this.httpCliente.post<Empleado>('http://moralo.atwebpages.com/ajaxListar/create_persona.php',emp)
  }

  modificarEmpleado(emp : Empleado){
    return this.httpCliente.put<Empleado>('http://moralo.atwebpages.com/ajaxListar/update_persona.php',emp) 
  }

  eliminarEmpleado(id:number){
    return this.httpCliente.delete<Empleado>('http://moralo.atwebpages.com/ajaxListar/delete_persona.php/?id='+id)
  }
}
