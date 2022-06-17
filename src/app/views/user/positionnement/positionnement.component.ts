import { Component, OnInit } from '@angular/core';
import { PositionnementService } from '../services/positionnement.service';
import {  Positionnement as PositionnementModel  } from '../models/model-get/Positionnement';

@Component({
  selector: 'app-positionnement',
  templateUrl: './positionnement.component.html',
  styleUrls: ['./positionnement.component.css']
})
export class PositionnementComponent implements OnInit {

  positionnements!: PositionnementModel[];

  constructor(private _positionnementService:PositionnementService) {


  }

  ngOnInit(): void {
    this.getAllPositionnement();
  }
  getAllPositionnement()  {

    this._positionnementService.getAllPositionnement().subscribe((data: PositionnementModel[])=>{
      this.positionnements=data;
      console.log("Positionnement!!  ",this.positionnements);
    },(err: any)=>{
      console.log("ERROR",err);
    })
  }
}
