import { Component } from '@angular/core';
import { User } from "app/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
LOGGED_IN_USER:User;
constructor( ) { }
count : number = 0; 
  ngOnInit() {
  	 this.count = this.count+1; 
   this.LOGGED_IN_USER =JSON.parse(localStorage.getItem('currentUser'));
/*    let name=LOGGED_IN_USER.name;*/
     console.log(this.LOGGED_IN_USER);
       
  }

}
