import { Component, OnInit } from '@angular/core';
import { LeavetypeService } from "app/leavetype.service";
import { Leavetype } from "app/leavetype";

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.css']
})
export class LeavetypeComponent implements OnInit {

  leavetypes : Leavetype[];

  constructor(private _leavetypeService: LeavetypeService) { }

  ngOnInit() {
    this.getAllLeaveTypes();
  }

  getAllLeaveTypes() {
    this._leavetypeService.findAll().subscribe(
      leavetypes => this.leavetypes = leavetypes 
    );
  }

}
