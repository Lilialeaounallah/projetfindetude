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




  }
}
