import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {College} from './college';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CollegeService {

  constructor(private _http:Http) { }

  getAllColleges():Observable<College[]> {
    return this._http.get("http://localhost:5000/colleges").
    map(response=>response.json() as College[]);
  }
}


