import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Leavestatus } from "app/leavestatus";

@Injectable()
export class LeavestatusService {

  constructor(private _http: Http) { }

  findAll(): Observable<Leavestatus[]> {
    return this._http.get("http://localhost:5000/leavestatus").
      map(response => response.json() as Leavestatus[]);

  }

}
