import { Component, OnInit } from '@angular/core';
import { Ressource as RessourceModel} from '../models/model-get/ressource';
import { RessourceService } from '../services/ressource.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {

  ressources!: RessourceModel[];

  constructor(private _ressourceService:RessourceService) {


  }

  ngOnInit(): void {
    this.getAllRessource();
  }
  getAllRessource()  {

    this._ressourceService.getAllRessource().subscribe((data: RessourceModel[])=>{
      this.ressources=data;
      console.log("ressources !!",this.ressources);
    },(err: any)=>{
      console.log("ERROR",err);
    })
  }

}
