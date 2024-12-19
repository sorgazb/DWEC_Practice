import { Component } from '@angular/core';

@Component({
  selector: 'app-btn1',
  templateUrl: './btn1.component.html',
  styleUrls: ['./btn1.component.css']
})
export class Btn1Component {
  // Colores predefinidos
  colors: string[] = ['red', 'blue', 'green', 'yellow'];

  // Color actual seleccionado
  selectedColor: string = 'white';

  // Cambiar colores de todos los botones
  changeColors(clickedIndex: number): void {
    this.selectedColor = this.colors[clickedIndex];
  }

  // Obtener la clase Bootstrap según el color seleccionado
  getButtonClass(color: string): string {
    const colorClassMap: { [key: string]: string } = {
      red: 'btn-danger',
      blue: 'btn-primary',
      green: 'btn-success',
      yellow: 'btn-warning',
      white: 'btn-light'
    };
    return colorClassMap[color] || 'btn-light';
  }
}
