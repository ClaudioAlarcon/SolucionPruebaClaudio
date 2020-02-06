import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from 'src/app/services/endpoint.service';
import { Solution2 } from 'src/app/interfaces/solution2';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.css']
})
export class Solution2Component {
  public letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
   'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  public text: string[];
  public arrayendpoint: Array<Solution2>;
  public counts: string[];

  constructor(public endpoint: EndpointService) {
    this.text = [];
    this.arrayendpoint = [];
  }

  // Función para capturar el endpoint y guardarlo en un array de objetos
  public gettext(): void {
    this.endpoint.getdata('http://patovega.com/prueba_frontend/dict.php').subscribe((res: Solution2) => {
    this.text = res.data;
    this.arrayendpoint = JSON.parse(this.text.toString());
    console.log(this.arrayendpoint);
  });
}
}
