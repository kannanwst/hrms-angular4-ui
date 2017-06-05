import { Component, OnInit } from '@angular/core';

import {BatchService} from '../batch.service';

import {Batch} from '../batch';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
batches:Batch[] ;

  constructor(private _batchService:BatchService) { }

  ngOnInit() {
    this.getAllBatches();
  }

  getAllBatches(){
    this._batchService.getAllBatches().subscribe(
      batches => this.batches = batches
    );
  }
 

  

}

