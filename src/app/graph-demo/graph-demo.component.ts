import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-demo',
  templateUrl: './graph-demo.component.html',
  styleUrls: ['./graph-demo.component.scss']
})
export class GraphDemoComponent implements OnInit {
  
  nodes:Array<any>;
  constructor() { 
    this.nodes=[];
  }
  
  ngOnInit(): void {
  }

  addNode(): void {
    this.nodes.unshift(1);
  }
  

}
