import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { EventListingComponent } from './events/event-listing.component';
import { EventDetailComponent } from './events/event-detail.component';
import { PriceFilterPipe } from './events/price.filter.pipe';

import { HostEventService } from './events/event.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EventListingComponent,
    EventDetailComponent,
    PriceFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HostEventService,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
