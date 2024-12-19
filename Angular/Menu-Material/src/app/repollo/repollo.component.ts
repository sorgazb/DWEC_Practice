import { Component } from '@angular/core';

@Component({
  selector: 'app-repollo',
  templateUrl: './repollo.component.html',
  styleUrls: ['./repollo.component.css']
})
export class RepolloComponent {

numero: number = 0;
numVeces: number = 0;

contar() {
  this.numVeces = 0;
  let array = []
  for (let index = 0; index < 100; index++) {
    array.push(Number(Math.floor(Math.random()*20)))
  }
  for (let index = 0; index < array.length; index++) {
    if(this.numero == array[index]){
      this.numVeces = this.numVeces + 1
    }
  }
}
}
