import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent }      from './events/event-detail.component';
import { EventListingComponent }  from './events/event-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'detail/:id', component: EventDetailComponent },
  { path: 'detail', component: EventDetailComponent },
  { path: 'events',     component: EventListingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
