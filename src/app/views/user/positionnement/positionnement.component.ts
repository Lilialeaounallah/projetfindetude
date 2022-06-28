import { Component, OnInit } from '@angular/core';
import { PositionnementService } from '../services/positionnement.service';
import { Positionnement as PositionnementModel, Positionnement } from '../models/Positionnement';

@Component({
  selector: 'app-positionnement',
  templateUrl: './positionnement.component.html',
  styleUrls: ['./positionnement.component.css']
})
export class PositionnementComponent implements OnInit {

  successmsg!: string;
  positionnements!: PositionnementModel[];

  constructor(private _positionnementService:PositionnementService) {


  }

  ngOnInit(): void {
    this.getAllPositionnement();
  }
  getAllPositionnement()  {

    this._positionnementService.getAllPositionnement().subscribe((res:Positionnement[])=>{
      this.positionnements=res;
      console.log("all positionnement ==>",res);
    }/*,(err: any)=>{
      console.log("ERROR",err);}*/)
}

 // delete by id
 deleteId(id_positionnement:number){
  console.log('delete id ==>',id_positionnement)
  this._positionnementService.deletePositionnementSer(id_positionnement).subscribe((res:Positionnement)=>{
    console.log(res,'deleted res ==>')
    this.successmsg='élèment supprimer avec succées !!';
    this.getAllPositionnement();

  });

}
}
