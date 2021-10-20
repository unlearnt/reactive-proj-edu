import { Component, Input } from '@angular/core';
import { Quote } from 'src/app/class/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent {
  @Input() quote: Quote | undefined;
}
