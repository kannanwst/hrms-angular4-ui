import { Component, OnInit } from '@angular/core';
import { RatingService } from "app/rating.service";
import { Rating } from "app/rating";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  ratings: Rating[]; 
  constructor(private _ratingService: RatingService) { }

  ngOnInit() {
    this.getAllRatings();
  }

  getAllRatings() {
    this._ratingService.getAllRatings().subscribe(
      ratings => this.ratings = ratings 
    );
  }

}
