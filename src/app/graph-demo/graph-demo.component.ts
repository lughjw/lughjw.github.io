import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-demo',
  templateUrl: './graph-demo.component.html',
  styleUrls: ['./graph-demo.component.scss']
})
export class GraphDemoComponent implements OnInit {

  constructor() { 
    
  }
  nodes:Array<number> = Array(10);
  ngOnInit(): void {
  }

}
