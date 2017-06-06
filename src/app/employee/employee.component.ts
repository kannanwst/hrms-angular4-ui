import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees:Employee[] ;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
  this.getActiveEmployees();
  }
getActiveEmployees(){
	this._employeeService.getActiveEmployees().subscribe(
     employees => this.employees = employees);
     console.log("employees :" + JSON.stringify(this.employees));  
}
}
