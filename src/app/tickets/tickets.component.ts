import { Component, OnInit } from '@angular/core';
import { Tickets } from '../tickets';

import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets:Tickets[] ;
 
  constructor(private _ticketsService: TicketsService) { }

  ngOnInit() {
  this.getAllTickets();
  }
getAllTickets(){
	this._ticketsService.getAllTickets().subscribe(
     tickets => this.tickets = tickets);

     console.log("tickets :" + JSON.stringify(this.tickets));  
}
}
