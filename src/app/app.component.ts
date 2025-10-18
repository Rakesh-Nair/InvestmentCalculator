import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  onCalculateInvestmentResults(data : {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }) {
    console.log('Received data in AppComponent:', data);
  const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }
console.log(annualData);
  //return annualData;
}

}
