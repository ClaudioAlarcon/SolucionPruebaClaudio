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

  constructor(public endpoint: EndpointService) {
    this.numbers = [];
   }

  // Función para capturar el atributo "data" desde endpoint, retorna una lista con los números.
  public getnumbers() {
    this.endpoint.getdata('http://patovega.com/prueba_frontend/array.php').subscribe((res: Solution1) => {
    this.numbers = res.data;
    return this.numbers;
    });
  }
}
