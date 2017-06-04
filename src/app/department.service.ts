import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Department } from "app/department";

@Injectable()
export class DepartmentService {

 
  constructor(private _http: Http) { }

  findAll(): Observable<Department[]> {
    return this._http.get("http://localhost:5000/departments").
      map(response => response.json() as Department[]);

  }

}
