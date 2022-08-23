import { Component, OnInit } from '@angular/core';
import { Projet, Projet as ProjetModel } from '../models/projet';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  successmsg!: string;
  projets!: ProjetModel[];

  constructor(private _projetService:ProjetService) {


  }

  ngOnInit(): void {
    this.getAllProjet();
  }


  //get all projet
  getAllProjet()  {

    this._projetService.getAllProjet().subscribe((res:Projet[])=>{
      this.projets=res;
      console.log("all projets ==>",res);
    }/*,(err: any)=>{
      console.log("ERROR",err);}*/)

  }

    // delete by id
    deleteId(id_projet:number){
      console.log('delete id ==>',id_projet)
      this._projetService.deleteProjetSer(id_projet).subscribe((res:Projet)=>{
        console.log('deleted res ==>',res)
        this.successmsg='élèment supprimer avec succées !!';
        this.getAllProjet();

      });
    }

}
