import { Component, OnInit } from '@angular/core';
import { Ressource } from '../models/ressource';
import { RessourceService } from '../services/ressource.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {

  ressources!: Ressource[];
  successmsg!: string;

  constructor(private _ressourceService:RessourceService) {}

  ngOnInit(): void {
    this.getAllRessource();
  }
   /*getAllRessource()  {

   this._ressourceService.getAllRessource().subscribe((data: Ressource[])=>{
      this.ressources=data;
      console.log("ressources !!",this.ressources);
    },(err: any)=>{
      console.log("ERROR",err);
    })*/

      //get all ressource
  getAllRessource()  {

    this._ressourceService.getAllRessource().subscribe((res:Ressource[])=>{
      this.ressources=res;
      console.log("all ressources ==>",res);
    }/*,(err: any)=>{
      console.log("ERROR",err);}*/)

  }
      // delete by id
      deleteById(id_ressource:number){
        console.log('delete id ==>',id_ressource)
        this._ressourceService.deleteRessourceSer(id_ressource).subscribe((res:Ressource)=>{
          console.log(res,'deleted res ==>')
          this.successmsg='élèment supprimer avec succées !!';
          this.getAllRessource();

        });
      }



}
