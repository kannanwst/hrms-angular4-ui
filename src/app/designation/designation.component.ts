import { Component, OnInit } from '@angular/core';
import { Designation } from "app/designation";
import { DesignationService } from "app/designation.service";
import { Department } from "app/department";
import { DepartmentService } from "app/department.service";

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designations: Designation[];
  departments: Department[];
  constructor( private _designationService : DesignationService,private _departmentService: DepartmentService  ) { }

  ngOnInit() {
    this.getAllDesignations();
    this.getAllDepartments();
  }
 
  getAllDesignations(){
    this._designationService.findAll().subscribe(
      designations => this.designations = designations
           
    );

    }
getAllDepartments(){
    this._departmentService.findAll().subscribe(
      departments => this.departments = departments
     
           
    );
  }

}
