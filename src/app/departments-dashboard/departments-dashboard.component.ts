import { Component, OnInit } from '@angular/core';
import { DepartmentsDashboard } from '../departments-dashboard';
import { DepartmentsDashboardService } from '../departments-dashboard.service';
@Component({
  selector: 'app-departments-dashboard',
  templateUrl: './departments-dashboard.component.html',
  styleUrls: ['./departments-dashboard.component.css']
})
export class DepartmentsDashboardComponent implements OnInit {

 
departmentDashboardData:DepartmentsDashboard[] ;

  constructor(private _departmentsDashboardServiceService: DepartmentsDashboardService) { }

  ngOnInit() {
  this.loadDasboardData();
  console.log("DSD");
  }
  
loadDasboardData(){
	this._departmentsDashboardServiceService.loadDasboardData().subscribe(
     departmentDashboardData => this.departmentDashboardData = departmentDashboardData);
     console.log("departmentDashboardData :" + JSON.stringify(this.departmentDashboardData));  
}


}
