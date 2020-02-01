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
  public quantity: number[];
  public listfirst: number[];
  public listlast: number[];
  public i: number;
  public norepeatednumbers: number[];

  constructor(public endpoint: EndpointService) {
    this.numbers = [];
    this.quantity = [];
    this.listfirst = [];
    this.listlast = [];
    this.i = 0;
    this.norepeatednumbers = [];
   }

  // Función para capturar el atributo "data" desde endpoint, retorna una lista con los números.
  public getnumbers(): void {
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

// Función que revisa si el numero ya está anteriormente, si lo está, esta retorna: true.
public isrepeated(numbers: number[], num: number, ind: number): boolean {
  let validator = false;
  let count = 0;
  for (let index = 0; index <= ind; index++) {
    if (num === numbers[index]) {
      count += 1;
      if (count > 1) {
        validator = true;
      }
    }
  }
  return validator;
}

// Función para obtener la primera ubicación de un número en la lista
  public getfirst(numbers: number[], numb: number): number {
    let ind = 0;
    const firstlast: number[] = [];
    numbers.forEach(num => {
      if (num === numb) {
        firstlast.push(ind);
      }
      ind += 1;
    });
    return firstlast.shift();
  }

  // Función para obtener el últumo índice del número dentro de la lista
  public getlast(numbers: number[], numb: number): number {
    let ind = 0;
    const firstlast: number[] = [];
    numbers.forEach(num => {
      if (num === numb) {
        firstlast.push(ind);
      }
      ind += 1;
    });
    return firstlast.pop();
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
