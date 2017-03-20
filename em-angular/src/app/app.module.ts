import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventListingComponent } from './event-listing.component';
import { EventDetailComponent } from './event-detail.component';
import { DashboardComponent } from './dashboard.component';

import { HostEventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventListingComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'events',
        component: EventListingComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: EventDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    HostEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
