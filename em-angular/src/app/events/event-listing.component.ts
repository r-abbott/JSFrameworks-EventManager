import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HostEvent } from './event';
import { HostEventService } from './event.service';

@Component({
  selector: 'event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {
  title = "Upcoming Events";
  hostEvents: HostEvent[];
  selectedEvent: HostEvent;

  constructor(
    private router: Router,
    private eventService: HostEventService){
  }

  ngOnInit(): void{
    this.getEvents();
  }

  onSelect(event: HostEvent): void{
      this.selectedEvent = event;
      this.router.navigate(['/detail',this.selectedEvent.id]);
  }

  getEvents(): void{
      this.eventService.getEvents()
      .then(events => this.hostEvents = events)
      .catch(this.handleError);
  }

  addEvent(): void{
    this.router.navigate(['/detail']);
  }

  private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

