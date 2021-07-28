import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  interest_rate : number = 0;
  principal: number = 1;
  compounds_per_cycle: number = 0;
  compounding_period: number = 0;
  monthly_payments : number = 0;
  guide_url="https://angular.io/guide/forms"
  constructor() { }

  ngOnInit(): void {
  }

}
