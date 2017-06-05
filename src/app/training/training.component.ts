import { Component, OnInit } from '@angular/core';

import { Training } from '../training';

import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
 trainings:Training[] ;

  constructor(private _trainingService: TrainingService) { }

  ngOnInit() {
  this.getTrainings();
  }
getTrainings(){
	this._trainingService.getTrainings().subscribe(
     trainings => this.trainings = trainings);
     console.log("trainings :" + JSON.stringify(this.trainings));  
}
}
