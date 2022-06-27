import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from '../../models/candidat';
import { CandidatService } from '../../services/candidat.service';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {
  idCandidat!: number;
  candidat!:Candidat;

  constructor(private _candidatService:CandidatService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCandidat= Number(this.route.snapshot.params['id']);
    this._candidatService.getCandidatById(this.idCandidat).subscribe((data)=>{
      console.log(`########################### Loaded data: ${data}`);
      this.candidat=data;
    });

  }

  updateCandidat() {
    this._candidatService.updateCandidat(this.idCandidat, this.candidat).subscribe((data)=>{
      console.log('mise à jour avec succés');
    })
  }

}
