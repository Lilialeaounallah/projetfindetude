import { Component, OnInit } from '@angular/core';
import { Projet as ProjetModel } from '../models/projet';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets!: ProjetModel[];

  constructor(private _projetService:ProjetService) {


  }

  ngOnInit(): void {
    this.getAllProjet();
  }
  getAllProjet()  {

    this._projetService.getAllProjet().subscribe((data: ProjetModel[])=>{
      this.projets=data;
      console.log("projets !!",this.projets);
    },(err: any)=>{
      console.log("ERROR",err);
    })
  }

}
