import { Component, OnInit } from '@angular/core';
import {CollegeService} from '../college.service';

import {College} from '../college';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
colleges:College[] ;
  constructor(private _collegeService:CollegeService) { }

  ngOnInit() {
    this.getAllColleges();
  }

  getAllColleges(){
    this._collegeService.getAllColleges().subscribe(
      colleges => this.colleges = colleges
    );
  }
}

