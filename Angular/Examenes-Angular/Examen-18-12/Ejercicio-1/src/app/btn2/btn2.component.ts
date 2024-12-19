import { Component } from '@angular/core';

@Component({
  selector: 'app-btn2',
  templateUrl: './btn2.component.html',
  styleUrls: ['./btn2.component.css']
})
export class Btn2Component {
  counter: number = 0; // Contador inicializado en 0
  private intervalId: any = null; // ID del intervalo para el contador

  // Iniciar el contador
  startCounter(): void {
    this.resetCounter(); // Reinicia el contador
    this.resumeCounter(); // Comienza a contar
  }

  // Pausar el contador
  pauseCounter(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Detiene el intervalo
      this.intervalId = null;
    }
  }

  // Reanudar el contador
  resumeCounter(): void {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.counter++;
      }, 1000); // Incrementa el contador cada segundo
    }
  }

  // Reiniciar el contador
  private resetCounter(): void {
    this.counter = 0; // Reinicia el valor del contador
    this.pauseCounter(); // Detiene cualquier intervalo existente
  }
}
