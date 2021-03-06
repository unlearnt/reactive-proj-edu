import {Observable} from 'rxjs';
import {ChangeDetectorRef, Component} from "@angular/core";
import { QuoteReactiveService } from 'src/app/service/reactive/quote-reactive.service';
import { Quote } from 'src/app/class/quote';
import { QuoteBlockingService } from 'src/app/service/blocking/quote-blocking.service';

@Component({
  selector: 'app-component-quotes',
  providers: [QuoteReactiveService],
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent{

  quoteArray: Quote[] = [];
  selectedQuote: Quote | undefined;
  mode: string;
  pagination: boolean;
  page: number;
  size: number;

  constructor(private quoteReactiveService: QuoteReactiveService, 
              private quoteBlockingService: QuoteBlockingService, 
              private cdr: ChangeDetectorRef) {
    this.mode = "reactive";
    this.pagination = true;
    this.page = 0;
    this.size = 50;
  }

  resetData() {
    this.quoteArray = [];
  }

  requestQuoteStream(): void {
    this.resetData();
    let quoteObservable: Observable<Quote>;
    if (this.pagination === true) {
      quoteObservable = this.quoteReactiveService.getQuoteStream(this.page, this.size);
    } else {
      quoteObservable = this.quoteReactiveService.getQuoteStream();
    }
    quoteObservable.subscribe(quote => {
      this.quoteArray.push(quote);
      this.cdr.detectChanges();
    });
  }

  requestQuoteBlocking(): void {
    this.resetData();
    if (this.pagination === true) {
      this.quoteBlockingService.getQuotes(this.page, this.size)
        .subscribe(q => this.quoteArray = q);
    } else {
      this.quoteBlockingService.getQuotes()
        .subscribe(q => this.quoteArray = q);
    }
  }

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
    this.cdr.detectChanges();
  }
}
