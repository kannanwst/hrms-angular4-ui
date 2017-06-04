import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private _http: Http) {

   }

   create(user:User){
     console.log("Create User");
   }

   update(user:User) {
     console.log("Update User");
   }

   destroy(user:User){
     console.log("Destroy User");
   }

   getUsers() : Observable<User[]>{

     console.log("Get All Users");
     return this._http.get("http://localhost:5000/users").
     map(response=>response.json() as User[]);
     
   }

   getUser(user:User){
     var user1 = "Naresh";
     console.log("Get User");
     return user1;
   }

}
