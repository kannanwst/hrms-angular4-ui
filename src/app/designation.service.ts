import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Designation } from "app/designation";

@Injectable()
export class DesignationService {

   constructor(private _http: Http) { }

  findAll(): Observable<Designation[]> {
    return this._http.get("http://localhost:5000/designations").
      map(response => response.json() as Designation[]);

  }

}
