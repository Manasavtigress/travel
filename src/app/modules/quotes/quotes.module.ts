import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';

@NgModule({
  declarations: [QuotesComponent, QuotesListComponent, QuotesDetailComponent],
  imports: [
    CommonModule, 
    QuotesRoutingModule
  ],
  bootstrap: [QuotesComponent]
})
export class QuotesModule { }
