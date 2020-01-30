import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.css']
})
export class Solution1Component {
  public numbers = [];

  constructor(public endpoint: EndpointService) { }

  public getnumbers() {
  }
}
