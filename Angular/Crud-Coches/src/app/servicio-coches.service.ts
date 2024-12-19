import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculos } from './vehiculos';

@Injectable({
  providedIn: 'root'
})
export class ServicioCochesService {

  constructor(private httpCliente:HttpClient) { }

  leerVehiculos(){
    return this.httpCliente.get<Vehiculos[]>("https://random-data-api.com/api/vehicle/random_vehicle?size=100")
  }
}
