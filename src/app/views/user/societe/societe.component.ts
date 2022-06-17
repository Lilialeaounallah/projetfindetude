import { Component, OnInit } from '@angular/core';
import { Societe } from '../models/model-get/societe';
import { SocieteService } from '../services/societe.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  societes!: Societe[];

  constructor(private _societeService:SocieteService) {


  }

  ngOnInit(): void {
    this.getAllSociete();
  }
  getAllSociete()  {

    this._societeService.getAllSociete().subscribe((data: Societe[])=>{
      this.societes=data;
      console.log("aaa",this.societes);
    },(err: any)=>{
      console.log("ERROR",err);
    })
  }


}
