import { Component, OnInit } from '@angular/core';
import { HolidayService } from "app/holiday.service";
import { Observable } from "rxjs/Observable";
import { Holiday } from "app/holiday";

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  holidays: Holiday[];

  constructor( private _holidayService : HolidayService) { }

  ngOnInit() {
    this.getAllHolidays();
  }

  getAllHolidays(){
    this._holidayService.findAll().subscribe(
      holidays => this.holidays = holidays
    );
  }



}
