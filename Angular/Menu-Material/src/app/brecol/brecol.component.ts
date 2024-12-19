import { Component } from '@angular/core';

@Component({
  selector: 'app-brecol',
  templateUrl: './brecol.component.html',
  styleUrls: ['./brecol.component.css']
})
export class BrecolComponent {
  numero : number = 0
  english : string = ''
  espaniol : string = ''

  arrayEsp = ['Uno','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez']
  arrayEng = ['One','Two','Three','Four','Five','Six','Seven','Eigth','Nine','Ten']
  traduccion(){
    this.espaniol = this.arrayEsp[this.numero-1]
    this.english = this.arrayEng[this.numero-1]
  }
}
