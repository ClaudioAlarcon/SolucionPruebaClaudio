import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from 'src/app/services/endpoint.service';
import { Solution2, ObjectEndPoint } from 'src/app/interfaces/solution2';
import { isNumber } from 'util';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.css']
})
export class Solution2Component {
  public letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
   'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  public text: string[];
  public arrayendpoint: Array<ObjectEndPoint>;
  public paragraphs: string[];
  public RegEx: RegExp;
  public prueba: string[];

  constructor(public endpoint: EndpointService) {
    this.text = [];
    this.arrayendpoint = [];
    this.paragraphs = [];
    this.RegEx = /[0-9]+/g;
    this.prueba = ['lkdaslkdalsdk 1970 akdjaskdj 30 ksmdkasd 2002', '1'];
  }

  // Función para capturar el endpoint y guardarlo en un array de objetos, guardando los textos en una lista.
  public gettext(): void {
    this.endpoint.getdata('http://patovega.com/prueba_frontend/dict.php').subscribe((res: Solution2) => {
    this.arrayendpoint = JSON.parse(res.data.toString());
    this.arrayendpoint.forEach(element => {
      this.paragraphs.push(element.paragraph);
    });
    console.log(this.paragraphs);
  });
}
  // Función para contar letras, recibe el indice del párrafo dentro del arreglo párrafos y la letra a contar.
  public countletters(ind: number, letter: string): number {
    let count = 0;
    for (const iterator of this.paragraphs[ind].toLowerCase()) {
      if (iterator === letter) {
        count += 1;
      }
    }
    return count;
  }

  // Función para encontrar los números dentro de la cadena de texto
  public findnumbers(ind: number): number[] {
    let numbers = [];
    numbers = this.paragraphs[ind].match(this.RegEx);
    return numbers;
  }
}

