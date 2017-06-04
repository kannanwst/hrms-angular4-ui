import { Component, OnInit } from '@angular/core';

import {CategoryService} from '../category.service';

import {Category} from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[] ;

  constructor(private _categoryService:CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe(
      categories => this.categories = categories
    );
  }
}
