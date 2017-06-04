import { Component, OnInit } from '@angular/core';
import { LeavestatusService } from "app/leavestatus.service";
import { Leavestatus } from "app/leavestatus";

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  leavestatus : Leavestatus[];

  constructor(private _leavestatusService: LeavestatusService) { }

  ngOnInit() {
    this.getAllLeaveStatus();
  }

 getAllLeaveStatus() {
    this._leavestatusService.findAll().subscribe(
      leavestatus => this.leavestatus = leavestatus 
    );
  }

}
