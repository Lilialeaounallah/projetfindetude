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

  }

  updateCandidat() {

  }

}
