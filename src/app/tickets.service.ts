import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Tickets} from './tickets';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class TicketsService {

   constructor(private _http: Http) { }
    getAllTickets() : Observable<Tickets[]>{

     console.log("Get All trainings");
     return this._http.get("http://localhost:5000/tickets").
     map(response=>response.json() as Tickets[]);
   }

}
