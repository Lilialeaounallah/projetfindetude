import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SocieteService } from '../../services/societe.service';
import {Router} from '@angular/router';
@Component({
  selector: 'update-societe',
  templateUrl: './update-societe.component.html',
  styleUrls: ['./update-societe.component.css'],
})
export class UpdateSocieteComponent implements OnInit {

  //societe: Societe = new Societe(0,'',0,'','',0,'','',0,'','','','','','',0,0,0)

  errormsg!: string;
  successmsg!: string;
  getparamid: any;

  constructor(
    private _service: SocieteService,
    private ActivatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {

    //message to verify id getted from url
    console.log(
      this.ActivatedRoute.snapshot.paramMap.get('id_societe'),
      '==> id recupérer'
    );

    //get id from url
    this.getparamid = this.ActivatedRoute.snapshot.paramMap.get('id_societe');

    //subscibe service getSingleData
    this._service.getSingleData(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.societeForm.patchValue({
        nom: res[0].nom,
        effectif: res[0].effectif,
        societe_mere: res[0].societe_mere,
        id_secteur: res[0].secteur,
        id_provenance: res[0].provenance,
        agence: res[0].agence,
        telephonne: res[0].telephonne,
        site_web: res[0].site_web,
        adress: res[0].adress,
        code_postal: res[0].code_postal,
        ville: res[0].ville,
        pays: res[0].pays,
        statut_juridique: res[0].statut_juridique,
        tva_ic: res[0].tva_ic,
        siret: res[0].siret,
        code_ape: res[0].code_ape,
        id_ressource: res[0].ressource,
      });
    });
  }
  societeForm=new FormGroup({
    'nom':new FormControl('',Validators.required),
    'effectif':new FormControl('',Validators.required),
    'societe_mere':new FormControl('',Validators.required),
    'id_secteur':new FormControl('',Validators.required),
    'id_provenance':new FormControl('',Validators.required),
    'agence':new FormControl('',Validators.required),


    'telephonne':new FormControl('',Validators.required),
    'site_web':new FormControl('',Validators.required),
    'adress':new FormControl('',Validators.required),
    'code_postal':new FormControl('',Validators.required),
    'ville':new FormControl('',Validators.required),
    'pays':new FormControl('',Validators.required),
    'statut_juridique':new FormControl('',Validators.required),
    'tva_ic':new FormControl('',Validators.required),
    'siret':new FormControl('',Validators.required),
    'code_ape':new FormControl('',Validators.required),
    'id_ressource':new FormControl('',Validators.required),



  })


  //function update
  modifier() {
    console.log(this.societeForm.value,'update Societe')

    if(this.societeForm.valid)
    {
      this._service.updateSociete(this.societeForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'res updated')
        this.successmsg='modification effectuer avec succées '
        this.router.navigate(['/societe']);


      });

    }else{
      this.errormsg='veuillez renseigner tout les champs'

    }
  }
}
