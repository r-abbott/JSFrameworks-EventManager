import { Component, OnInit } from '@angular/core';

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

  constructor(private eventService: HostEventService){
  }

  ngOnInit(): void{
    this.getEvents();
  }

  onSelect(event: HostEvent): void{
      this.selectedEvent = event;
  }

  getEvents(): void{
      this.eventService.getEvents().then(events => this.hostEvents = events);
  }
}

