import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  principal: number = 1;
  interestRate: number = 0.1;
  compoundsPerPeriod: number = 12;
  periodCount: number = 1;
  cyclyPayment: number = 0;
  total: number = 0;
  totalFromPeriodicPayments: number = 0;
  totalInterest: number = 0;
  totalInterestFromPayments: number = 0;
  totalInterestFromPrincipal: number = 0;
  totalFromPrincipal: number = 0;
  guide_url="https://angular.io/guide/forms"
  constructor() { }

  onSubmit() { 
    // P(1+r/n)^(nt)
    let compound = Math.pow((1+(this.interestRate/this.compoundsPerPeriod)),this.compoundsPerPeriod*this.periodCount);

    this.totalFromPeriodicPayments = this.cyclyPayment * this.periodCount*this.compoundsPerPeriod;
    this.totalInterest = this.cyclyPayment*((compound-1)/(this.interestRate/this.compoundsPerPeriod));
    this.totalInterestFromPayments = this.totalInterest - this.totalFromPeriodicPayments;
    this.totalFromPrincipal = this.principal * compound;
    this.totalInterestFromPrincipal = this.principal * compound - this.principal;
    this.total = this.totalInterest + this.totalFromPrincipal;
  }
  ngOnInit(): void {
  }

}
