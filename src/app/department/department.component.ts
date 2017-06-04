import { Component, OnInit } from '@angular/core';
import { Department } from "app/department";
import { DepartmentService } from "app/department.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

 departments: Department[];

  constructor( private _departmentService : DepartmentService) { }

  ngOnInit() {
    this.getAllDepartments();
  }

  getAllDepartments(){
    this._departmentService.findAll().subscribe(
      departments => this.departments = departments
    );
  }


}
