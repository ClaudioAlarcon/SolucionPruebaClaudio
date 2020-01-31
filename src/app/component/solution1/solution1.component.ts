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
  public listfirst: number[];
  public listlast: number[];
  public i: number;

  constructor(public endpoint: EndpointService) {
    this.numbers = [];
    this.count = 0;
    this.arraydatanumbers = [];
    this.arraynumbers = [];
    this.quantity = [];
    this.listfirst = [];
    this.listlast = [];
    this.i = 0;
   }

  // Función para capturar el atributo "data" desde endpoint, retorna una lista con los números.
  public getnumbers(): void {
    this.arraydatanumbers = [];
    this.arraynumbers = [];
    this.endpoint.getdata('http://patovega.com/prueba_frontend/array.php').subscribe((res: Solution1) => {
    this.numbers = res.data;
  });
}


//   public quantitydata(da: number[]): number[] {
//     this.arraycompare = da;
//     for (const iterator1 of this.arraycompare) {
//       this.i = 0;
//       this.count = 0;
//       for (const iterator2 of da) {
//         if (iterator1 === iterator2) {
//           this.count += 1;
//           if (this.count === 1) {
//             this.listfirst.push(this.i);
//             this.listlast.push(this.i);
//           } else {
//             this.listlast.pop();
//             this.listlast.push(this.i);
//           }
//         } else {
//         }
//         this.i += 1;
//       }
//       this.quantity.push(this.count);
//     }
//     console.log(this.quantity);
//     return this.quantity;
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
