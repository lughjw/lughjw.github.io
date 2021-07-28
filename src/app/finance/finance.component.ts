import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  principal: number = 1;
  interestRate: number = 0.1;
  compoundsPerCycle: number = 0;
  cycleCount: number = 12;
  cyclyPayment: number = 0;
  total: number = 0;
  totalFromInterest: number = 0;
  totalFromPrincipal: number = 0;
  guide_url="https://angular.io/guide/forms"
  constructor() { }

  onSubmit() { 
    // P(1+r/n)^(nt)
    this.totalFromInterest = this.cyclyPayment*((Math.pow((1+(this.interestRate/this.compoundsPerCycle)),this.compoundsPerCycle*this.cycleCount)-1)/(this.interestRate/this.compoundsPerCycle));
    this.totalFromPrincipal = this.principal * Math.pow((1+(this.interestRate/this.compoundsPerCycle)),this.compoundsPerCycle*this.cycleCount);
    this.total = this.totalFromInterest + this.totalFromPrincipal;
  }
  ngOnInit(): void {
  }

}
