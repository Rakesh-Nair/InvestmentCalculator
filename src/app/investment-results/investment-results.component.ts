import { CurrencyPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentResultsService = inject(InvestmentResultsService);

  get results(){
    return this.investmentResultsService.resultsData;
  }
}
