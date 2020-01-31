import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { Solution1 } from 'src/app/interfaces/solution1';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.css']
})
export class Solution1Component {
  public numbers: number[];
  public arraydatanumbers: Array<number[]>;
  public arraynumbers: number[];
  public quantity: number[];
  public arraycompare: number[];
  public listfirst: number[];
  public listlast: number[];
  public i: number;
  public tocompare: number[];

  constructor(public endpoint: EndpointService) {
    this.numbers = [];
    this.arraydatanumbers = [];
    this.arraynumbers = [];
    this.quantity = [];
    this.listfirst = [];
    this.listlast = [];
    this.i = 0;
    this.tocompare = [];
   }

  // Función para capturar el atributo "data" desde endpoint, retorna una lista con los números.
  public getnumbers(): void {
    this.arraydatanumbers = [];
    this.arraynumbers = [];
    this.endpoint.getdata('http://patovega.com/prueba_frontend/array.php').subscribe((res: Solution1) => {
    this.numbers = res.data;
  });
}

// Función para contar números
  public numberquantity(numbers: number[], numb: number): number {
    let count = 0;
    numbers.forEach(num => {
      if (num === numb) {
        count += 1;
      }
    });
    return count;
}

// Función para obtener la primera ubicación de un número en la lista

  public getfirstlast(numbers: number[], numb: number): number[] {
    let ind = 0;
    const firstlast: number[] = [];
    numbers.forEach(num => {
      if (num === numb) {
        firstlast.push(ind);
      }
      ind += 1;
    });
    return firstlast;
  }

  // Función para ordenar números
  public sort() {
    let int = 0;
    for (let i = 0; i < (this.numbers.length - 1); i++) {
      for (let j = 0; j < (this.numbers.length - i); j++) {
        if (this.numbers[j] > this.numbers[j + 1]) {
          int = this.numbers[j];
          this.numbers[j] = this.numbers[j + 1];
          this.numbers[j + 1] = int;
        }
      }
    }
    return this.numbers;
  }
}
