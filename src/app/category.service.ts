import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {Category} from './category';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class CategoryService {

  constructor(private _http:Http) { }

  getAllCategories():Observable<Category[]> {
    return this._http.get("http://localhost:5000/categories").
    map(response=>response.json() as Category[]);
  }
}
