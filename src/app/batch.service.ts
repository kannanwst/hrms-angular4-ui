import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {Batch} from './batch';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BatchService {

  constructor(private _http:Http) { }

  getAllBatches():Observable<Batch[]> {
    return this._http.get("http://localhost:5000/batches").
    map(response=>response.json() as Batch[]);
  }

}
