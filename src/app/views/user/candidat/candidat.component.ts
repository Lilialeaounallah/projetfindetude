import { Component, OnInit } from '@angular/core';
import{Candidat} from '../models/candidat'
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  candidats!:Candidat[];

  constructor(private _candidatService:CandidatService) {


  }

  ngOnInit(): void {
    this.getAllCandidat();
  }
  getAllCandidat() {
    this._candidatService.getAllCandidat().subscribe((data: Candidat[])=>{
      this.candidats=data;
      console.log(this.candidats);
    })
  }



}
