import { Injectable } from '@angular/core';
import { Http } from "@angular/http/http";
import { Observable } from "rxjs/Observable";
import { Employee } from "app/employee";

@Injectable()
export class EmployeeService {

  
  constructor(private _http: Http) { }

  findAll(): Observable<Employee[]> {
    return this._http.get("http://localhost:5000/employees").
      map(response => response.json() as Employee[]);

  }

}
