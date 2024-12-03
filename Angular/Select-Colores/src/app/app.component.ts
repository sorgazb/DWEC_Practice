import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Select-Colores';

  textoColor:string = ""

  tamanio:string = ""

  claseColor:string = ""

  claseTamanio:string = ""

  claseBack:string = ""

  cambioColor() {
    if (this.textoColor=='Rojo'){
      this.claseColor='claseRojo'
    }else if(this.textoColor=='Azul'){
      this.claseColor='claseAzul'
    }else if(this.textoColor=='Verde'){
      this.claseColor='claseVerde'
    }else if(this.textoColor=='Amarillo'){
      this.claseColor='claseAmarillo'
    }
  }

  cambioColorFondo(){
    if (this.textoColor=='Rojo'){
      this.claseBack='claseRojoFondo'
    }else if(this.textoColor=='Azul'){
      this.claseBack='claseAzulFondo'
    }else if(this.textoColor=='Verde'){
      this.claseBack='claseVerdeFondo'
    }else if(this.textoColor=='Amarillo'){
      this.claseBack='claseAmarilloFondo'
    }
  }

  cambioTamanio(){
    if (this.tamanio=='12px'){
      this.claseTamanio='clase12'
    }else if(this.tamanio=='16px'){
      this.claseTamanio='clase16'
    }else if(this.tamanio=='20px'){
      this.claseTamanio='clase20'
    }else if(this.tamanio=='24px'){
      this.claseTamanio='clase24'
    }
  }
}
