import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { DepartmentsDashboard } from "app/departments-dashboard";
@Injectable()
export class DepartmentsDashboardService {

  constructor(private _http: Http) { }

  loadDasboardData(): Observable<DepartmentsDashboard[]> {
    return this._http.get("http://localhost:5000/dashboard/departments").
      map(response => response.json() as DepartmentsDashboard[]);

  }
}


