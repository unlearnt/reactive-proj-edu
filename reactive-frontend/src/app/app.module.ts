import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { QuoteDetailComponent } from './component/quote-detail/quote-detail.component';
import { FormsModule } from '@angular/forms';
import { QuoteReactiveService } from './service/reactive/quote-reactive.service';
import { QuoteBlockingService } from './service/blocking/quote-blocking.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuoteReactiveService,
    QuoteBlockingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
