import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graph-node',
  templateUrl: './graph-node.component.html',
  styleUrls: ['./graph-node.component.scss']
})
export class GraphNodeComponent implements OnInit {
  @Input() value:any = "";
  constructor() {}

  ngOnInit(): void {
  }

}
