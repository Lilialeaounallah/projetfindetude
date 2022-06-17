import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from '../../models/model-get/candidat';
import { CandidatService } from '../../services/candidat.service';

@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrls: ['./details-candidat.component.css']
})
export class DetailsCandidatComponent implements OnInit {

  idCandidat!: number;
  candidat: Candidat=new Candidat(5,'mm','ale','aounallah','23/02/1999','test@gmail.com',22333555,'25 aveneue tayeb mhiri','sousse',8888,'tunis','vivier','linkedin','dans 6 mois','souse','ali mguebli','tunis','B','commentaire');


  constructor(private _candidatService:CandidatService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.idCandidat= Number(this.route.snapshot.params['id']);
    this._candidatService.getCandidatById(this.idCandidat).subscribe((data)=>{
      console.log(`########################### Loaded data: ${data}`);
      this.candidat=data;
    })
    // this.getAgentById();
  }


}
