import { Injectable } from '@angular/core';

import { HostEvent } from './event';
import { EVENTS } from './mock-events';

@Injectable()
export class HostEventService{
    getEvents(): Promise<HostEvent[]>{
        return Promise.resolve(EVENTS);
    }
    getEvent(id: number) : Promise<HostEvent>{
        return this.getEvents()
             .then(events => events.find(e => e.id === id));
    }
}