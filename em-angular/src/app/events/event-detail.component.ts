import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HostEvent } from './event';
import { HostEventService } from './event.service';

@Component({
    selector: 'event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit{
    @Input()
    hostEvent: HostEvent;

    constructor(
        private eventService: HostEventService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                if(!params['id']){
                    return Promise.resolve(new HostEvent());
                }
                return this.eventService.getEvent(+params['id'])
            })
            .subscribe(e => this.hostEvent = e);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        if(!this.hostEvent.id){
            this.eventService.add(this.hostEvent)
                .then(() => this.goBack());
        }
        else{
            this.eventService.update(this.hostEvent)
                .then(() => this.goBack());
        }
    }

    delete(): void{
        this.eventService.delete(this.hostEvent)
            .then(() => this.goBack());
    }

    addInformation(): void {
        this.hostEvent.additionalInformation.push("");
    }

    deleteInformation(index : number): void {
        this.hostEvent.additionalInformation.splice(index,1);
    }

    additionalInfoTrackBy(index : number, obj: any): any{
        return index;
    }
}