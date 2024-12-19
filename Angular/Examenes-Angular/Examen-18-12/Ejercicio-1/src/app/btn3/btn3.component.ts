import { Component } from '@angular/core';

@Component({
  selector: 'app-btn3',
  templateUrl: './btn3.component.html',
  styleUrls: ['./btn3.component.css']
})
export class Btn3Component {
  randomImageUrl: string | null = null; // URL de la imagen aleatoria

  // Función para generar una nueva imagen aleatoria
  generateRandomImage(): void {
    const randomId = Math.floor(Math.random() * 1000); // Genera un ID aleatorio
    this.randomImageUrl = `https://picsum.photos/600/400?random=${randomId}`;
  }
}
