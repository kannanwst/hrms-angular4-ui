import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[] ;

  constructor(private _userService: UserService) {  }

  ngOnInit() {
   this.getUsers();
  }

  getUsers(){
     this._userService.getUsers().subscribe(
     users => this.users = users  ,err => {
                                    // Log errors if any
                                    console.log("Error:" + err);
                                });
     console.log("User :" + JSON.stringify(this.users));
    // return this.users;
  }


}
