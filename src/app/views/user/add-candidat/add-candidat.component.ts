import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Candidat } from '../models/candidat';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
  candidat: Candidat=new Candidat(5,'mm','ale','aounallah','23/02/1999','test@gmail.com',22333555,'25 aveneue tayeb mhiri','sousse',8888,'tunis','vivier','linkedin','dans 6 mois','souse','ali mguebli','tunis','B','commentaire');
  constructor(private candidatService : CandidatService) {
  }

  ngOnInit(): void {
  }
  ajout(f:any){

    // call api and add send i to backends

    console.log("candidat ",this.candidat);
    this.candidatService.addCandidat(this.candidat).subscribe(data=>{
      console.log("candidat added successfully", data);

    },err=>{
      console.log("Error",err)
    })


  }
}
