import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {Training} from './training';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TrainingService {

  constructor(private _http: Http) { }
  getTrainings() : Observable<Training[]>{

     console.log("Get All trainings");
     return this._http.get("http://localhost:5000/trainings").
     map(response=>response.json() as Training[]);
   }

}
