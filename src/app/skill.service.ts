import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {Skill} from './skill';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SkillService {

  constructor(private _http: Http) { }

   getSkills() : Observable<Skill[]>{

     console.log("Get All skills");
     return this._http.get("http://localhost:5000/skills").
     map(response=>response.json() as Skill[]);
   }

}
