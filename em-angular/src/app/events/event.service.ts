import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HostEvent } from './event';

@Injectable()
export class HostEventService{
    private eventsUrl = 'http://localhost:51473/api/events';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) { }

    getEvents(): Promise<HostEvent[]>{
        return this.http
            .get(this.eventsUrl)
            .toPromise()
            .then(response => {
                return response.json() as HostEvent[]
            })
            .catch(this.handleError);
    }

    getEvent(id: number) : Promise<HostEvent>{
        const url = `${this.eventsUrl}/${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json() as HostEvent)
            .catch(this.handleError);
    }

    add(hostEvent: HostEvent) : Promise<HostEvent>{
        return this.http
            .post(this.eventsUrl, JSON.stringify(hostEvent), {headers: this.headers})
            .toPromise()
            .then(()=>hostEvent)
            .catch(this.handleError);
    }

    update(hostEvent: HostEvent) : Promise<HostEvent>{
        const url = `${this.eventsUrl}/${hostEvent.id}`;
        return this.http
            .put(url, JSON.stringify(hostEvent), {headers: this.headers})
            .toPromise()
            .then(()=>hostEvent)
            .catch(this.handleError);
    }

    delete(hostEvent: HostEvent) : Promise<void>{
        const url = `${this.eventsUrl}/${hostEvent.id}`;
        return this.http
            .delete(url)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}