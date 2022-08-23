import { Component, OnInit } from '@angular/core';
import{Candidat} from '../models/candidat';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  successmsg!: string;
  candidats!: Candidat[];

  constructor(private _candidatService:CandidatService) {


  }

  ngOnInit(): void {
    this.getAllCandidat();
  }
  getAllCandidat() {

    this._candidatService.getAllCandidat().subscribe((res:Candidat[])=>{
      this.candidats=res;
      console.log("all candidat ==>",res);
    }/*,(err: any)=>{
      console.log("ERROR",err);}*/)

  }

  // delete by id
  deleteId(id_condidat:number){
    console.log('delete id ==>',id_condidat)
    this._candidatService.deleteCandidatSer(id_condidat).subscribe((res:Candidat)=>{
      console.log(res,'deleted res ==>')
      this.successmsg='élèment supprimer avec succées !!';
      this.getAllCandidat();

    });
  }





}
