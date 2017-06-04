import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Rating } from './rating';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RatingService {

  constructor(private _http: Http) { }

  getAllRatings(): Observable<Rating[]> {
    return this._http.get("http://localhost:5000/ratings").
      map(response => response.json() as Rating[]);

  }

}
