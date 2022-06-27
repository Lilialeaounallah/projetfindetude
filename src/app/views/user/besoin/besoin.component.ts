
import { Component, OnInit } from '@angular/core';

import { Besoin as BesoinModel } from '../models/besoin';
import { BesoinService } from '../services/besoin.service';

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})
export class BesoinComponent implements OnInit {
  name="Besoin";
  besoins!: BesoinModel[];

  constructor(private _besoinService:BesoinService) {


  }

  ngOnInit(): void {
    this.getAllBesoin();
  }
getAllBesoin()  {

    this._besoinService.getAllBesoin().subscribe((data: BesoinModel[])=>{
      this.besoins=data;
      console.log("besoins      !!",this.besoins);
    },(err: any)=>{
      console.log("ERROR",err);
    })
  }

}
