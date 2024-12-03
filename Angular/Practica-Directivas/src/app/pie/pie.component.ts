import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  horaActual : string = new Date().toLocaleTimeString('es-EU')

  iniciarTemporizador = setInterval(() => {
      this.horaActual = new Date().toLocaleTimeString('es-EU')
  }, 1000); // 1000 ms = 1 segundo

}
