import { Component, OnInit } from '@angular/core';

import { HostEvent } from './event';
import { HostEventService } from './event.service';

@Component({
    selector: 'event-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    events: HostEvent[];

    constructor(private eventService: HostEventService){}

    ngOnInit(): void {
        this.eventService.getEvents()
        .then(e => this.events = e.slice(1,5));
    }
 }