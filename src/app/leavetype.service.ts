import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Leavetype } from "app/leavetype";

@Injectable()
export class LeavetypeService {

  
  constructor(private _http: Http) { }

  findAll(): Observable<Leavetype[]> {
    return this._http.get("http://localhost:5000/leavetypes").
      map(response => response.json() as Leavetype[]);

  }

}
