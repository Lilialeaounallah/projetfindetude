import { Component, OnInit } from '@angular/core';
import { Societe } from '../models/societe';
import { SocieteService } from '../services/societe.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {
  successmsg!: string;

  societes!: Societe[];

  constructor(private _societeService:SocieteService) {


  }

  ngOnInit(): void {
    this.getAllSociete();
  }



  getAllSociete()  {

    this._societeService.getAllSociete().subscribe((res:Societe[])=>{this.societes=res;
      console.log("aaa",res);
    }/*,(err: any)=>{
      console.log("ERROR",err);}*/)

  }

  //get delete id
  deleteId(id_societe:number){
    console.log('delete id ==>',id_societe)
    this._societeService.deleteSocieteSer(id_societe).subscribe((res:Societe)=>{
      console.log(res,'deleted res ==>')
      this.successmsg='élèment supprimer avec succées !!';
      this.getAllSociete();

    });
  }






}
