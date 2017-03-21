export class HostEvent{
    id: number;
    name: string;
    description: string;
    price: string;
    date: string;
    time: string;
    additionalInformation: string[];

    constructor(){
        this.additionalInformation = [];
    }
}