import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../models/candidat';
import { CandidatService } from '../../services/candidat.service';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
  candidat: Candidat=new Candidat(0,'','','','','',0,'','',0,'','','','','','','','','');
  constructor(private candidatService : CandidatService) {
  }

  ngOnInit(): void {
  }
  ajout(f:any){

    // call api and add send it to backends

    console.log("candidat ",this.candidat);
    this.candidatService.addCandidat(this.candidat).subscribe(data=>{
      console.log("candidat added successfully", data);

    },err=>{
      console.log("Error",err)
    })


  }
}
