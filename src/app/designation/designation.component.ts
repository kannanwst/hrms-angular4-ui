import { Component, OnInit } from '@angular/core';
import { Designation } from "app/designation";
import { DesignationService } from "app/designation.service";

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designations: Designation[];

  constructor( private _designationService : DesignationService) { }

  ngOnInit() {
    this.getAllDesignations();
  }

  getAllDesignations(){
    this._designationService.findAll().subscribe(
      designations => this.designations = designations
    );
  }


}
