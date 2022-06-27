import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import{SocieteService} from '../../services/societe.service'

@Component({
  selector: 'add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.css']
})
export class AddSocieteComponent implements OnInit {


  //societe: Societe = new Societe(0,'',0,'','',0,'','',0,'','','','','','',0,0,0)
  constructor(private _service:SocieteService) { }

  errormsg!: string;
  successmsg!: string;


  ngOnInit(): void {
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



  addSociete(){
    if(this.societeForm.valid)
    {
      console.log(this.societeForm.value);
      this._service.addSocieteSer(this.societeForm.value).subscribe((res)=>{
        console.log(res,'data ==>');

      this.societeForm.reset();
      this.successmsg=res.message;

      },(err)=>{console.log('message erreur',err);})
    }else{
      this.errormsg='merci de renseigner tous les champs !';
    }
  }


}
