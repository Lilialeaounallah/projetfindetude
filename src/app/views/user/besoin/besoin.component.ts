import { Component, OnInit } from '@angular/core';

import { Besoin } from '../models/besoin';
import { BesoinService } from '../services/besoin.service';

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css'],
})
export class BesoinComponent implements OnInit {
  name = 'Besoin';
  besoins!: Besoin[];
  successmsg!: string;

  constructor(private _besoinService: BesoinService) {}

  ngOnInit(): void {
    this.getAllBesoin();
  }

  //get all societe
  getAllBesoin() {
    this._besoinService.getAllBesoin().subscribe(
      (res: Besoin[]) => {
        this.besoins = res;
        console.log('all besoin ==>', res);
      } /*,(err: any)=>{
      console.log("ERROR",err);}*/
    );
  }

  // delete by id
  deleteId(id_besoin: number) {
    console.log('delete id ==>', id_besoin);
    this._besoinService.deleteBesoinSer(id_besoin).subscribe((res: Besoin) => {
      console.log(res, 'deleted res ==>');
      this.successmsg = 'élèment supprimer avec succées !!';
      this.getAllBesoin();
    });
  }
}
