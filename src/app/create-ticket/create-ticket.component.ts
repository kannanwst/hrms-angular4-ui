import { Component, OnInit } from '@angular/core';
import { CreateTicket } from "app/create-ticket";
import { User } from "app/user";
import { TicketCategory } from "app/ticket-category";
import { TicketStatus} from "app/ticket-status";
import { CreateTicketService } from "app/create-ticket.service";
import { Router } from '@angular/router';                                                                 

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {


 createTicket:any={};
 categories:TicketCategory[] ;

  constructor(private router: Router, private _createTicketService : CreateTicketService) { }
  
  ngOnInit() {
  this.getAllTicketCategories();

  }

  getAllTicketCategories(){
    this._createTicketService.getAllTicketCategories().subscribe(
      categories => this.categories = categories
    );
  }

 //ticket_created=false;

   addTicket() {
   	console.log( this.createTicket );
   this.createTicket.createdBy=new User();
   this.createTicket.ticketStatus=new TicketStatus();
   this.createTicket.createdBy.id=1;
   this.createTicket.ticketStatus.id=1;
 
   
   console.log("createTicket:" + JSON.stringify(this.createTicket ) );
 
    this._createTicketService.addTicket(this.createTicket)
       .subscribe(

      //createTicket => this.createTickets.push(this.createTicket)
       data => {
    //this.ticket_created=true;
        this.router.navigate(["tickets"]);
       	
                      
                },
       );
  }

}


