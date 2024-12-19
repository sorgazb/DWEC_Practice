import { Component } from '@angular/core';

@Component({
  selector: 'app-btn4',
  templateUrl: './btn4.component.html',
  styleUrls: ['./btn4.component.css']
})
export class Btn4Component {
  nameInput: string = ''; // Modelo para el input de texto
  names: string[] = []; // Lista de nombres agregados

  // Agrega el nombre a la lista
  addName(): void {
    if (this.nameInput.trim()) {
      this.names.push(this.nameInput.trim());
      this.nameInput = ''; // Limpia el input después de agregar
    }
  }
}
