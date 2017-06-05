import { Component, OnInit } from '@angular/core';
import { Trainers } from '../trainers';

import { TrainersService } from '../trainers.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  constructor(private _trainersService: TrainersService) { }
   trainers:Trainers[] ;

  ngOnInit() {
  this.getTrainers();
  }
  getTrainers(){
	this._trainersService.getTrainers().subscribe(
     trainers => this.trainers = trainers);
     console.log("trainers :" + JSON.stringify(this.trainers));  
}


}
