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
  count: number;
  public arraydatanumbers: Array<number[]>;
  public arraynumbers: number[];
  public quantity: number[];
  public arraycompare: number[];

  constructor(public endpoint: EndpointService) {
    this.numbers = [];
    this.count = 0;
    this.arraydatanumbers = [];
    this.arraynumbers = [];
    this.quantity = [];
   }

  // Función para capturar el atributo "data" desde endpoint, retorna una lista con los números.
  public getnumbers() {
    this.arraydatanumbers = [];
    this.arraynumbers = [];
    this.endpoint.getdata('http://patovega.com/prueba_frontend/array.php').subscribe((res: Solution1) => {
    this.numbers = res.data;
    this.arraydatanumbers.push(this.numbers);
    this.arraydatanumbers.forEach(datas => {
      datas.forEach(element => {
        this.arraynumbers.push(element);
      });
    });
    });
    this.arraycompare = this.arraynumbers;
    return this.arraynumbers;
  }

  // public quantitydata() {
  //   this.arraynumbers.forEach(element => {
  //     console.log(element);
  //   });
  // }

  // Función para ordenar números
  public sort(compare: number[]): number[] {
    let int = 0;
    for (let i = 0; i < (compare.length - 1); i++) {
      for (let j = 0; j < (compare.length - i); j++) {
        if (compare[j] > compare[j + 1]) {
          int = compare[j];
          compare[j] = compare[j + 1];
          compare[j + 1] = int;
        }
      }
    }
    return compare;
  }
}
