
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {CreateTicket} from './create-ticket';
import {TicketCategory} from './ticket-category';
import 'rxjs/add/operator/map';
import { Observable }  from 'rxjs/Observable';


@Injectable()
export class CreateTicketService {

  constructor(private _http:Http) { }


  getAllTicketCategories():Observable<TicketCategory[]> {
    return this._http.get("http://localhost:5000/ticketCategories").
    map(response=>response.json() as TicketCategory[]);
  }


  addTicket(createTicket:CreateTicket){
    console.log("Create Ticket:" + JSON.stringify(createTicket));
   return this._http.post("http://localhost:5000/tickets", createTicket )
   

   
   
 }
  
  

}

