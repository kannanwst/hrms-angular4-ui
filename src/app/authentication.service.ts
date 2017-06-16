import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { User } from "app/user";

@Injectable()
export class AuthenticationService {

 constructor(private _http:Http) { }

  login(user:User) {
    console.log("Login User:" + JSON.stringify(user));
    return this._http.post("http://localhost:5000/auth/login", user ).
    //map(response=>response.json() as User);
    map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    
  }
/*
   private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

   private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/

}
