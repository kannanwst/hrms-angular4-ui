import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {Trainers} from './trainers';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class TrainersService {

  constructor(private _http: Http) { }
  getTrainers() :Observable<Trainers[]>{
  console.log("Get All trainings");
     return this._http.get("http://localhost:5000/trainers").
     map(response=>response.json() as Trainers[]);

  }

}


