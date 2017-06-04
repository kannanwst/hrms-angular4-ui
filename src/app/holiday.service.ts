import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Holiday } from "app/holiday";

@Injectable()
export class HolidayService {

  constructor(private _http: Http) { }

  findAll(): Observable<Holiday[]> {
    return this._http.get("http://localhost:5000/holidays").
      map(response => response.json() as Holiday[]);

  }

}
