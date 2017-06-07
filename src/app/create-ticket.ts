
import {User} from './user';
import {TicketCategory} from './ticket-category';
import {TicketStatus} from './ticket-status';
export class CreateTicket {
 public id: number;
 public createdBy:User;
 public ticketCategory: TicketCategory;
 public ticketStatus: TicketStatus;

   
}
