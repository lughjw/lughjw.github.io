import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent implements OnInit {
  imgSrc:string = "https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Tasmanian-Devil-photo.jpg";
  firstName:string = "Lugh";
  lastName:string = "Wilson";
  constructor() { }

  ngOnInit(): void {
  }

}
