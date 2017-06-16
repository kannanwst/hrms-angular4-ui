import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Employee} from './employee';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class EmployeeService {

   constructor(private _http: Http) { }
    getActiveEmployees() : Observable<Employee[]>{

     console.log("Get All employees");
     return this._http.get("http://localhost:5000/employees/status/active").
     map(response=>response.json() as Employee[]);

   }

    getResignedEmployees() : Observable<Employee[]>{

     console.log("Get All employees");
     return this._http.get("http://localhost:5000/employees/status/resigned").
     map(response=>response.json() as Employee[]);
     
   }

}
