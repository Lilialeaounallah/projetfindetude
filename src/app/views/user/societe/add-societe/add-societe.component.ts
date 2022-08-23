import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocieteService } from '../../services/societe.service';
import { Ressource } from '../../models/ressource';
import { RessourceService } from '../../services/ressource.service';

@Component({
  selector: 'add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.css'],
})
export class AddSocieteComponent implements OnInit {
  //societe: Societe = new Societe(0,'',0,'','',0,'','',0,'','','','','','',0,0,0)
  constructor(private _service: SocieteService,private router: Router,private _ressourceService:RessourceService) {}

  errormsg!: string;
  successmsg!: string;
  ressources!: Ressource[];

  ngOnInit(): void {
    this.getAllRessource();
  }

  //definition of form group
  societeForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    effectif: new FormControl('', Validators.required),
    societe_mere: new FormControl('', Validators.required),
    id_secteur: new FormControl('', Validators.required),
    id_provenance: new FormControl('', Validators.required),
    agence: new FormControl('', Validators.required),
    telephonne: new FormControl('', Validators.required),
    site_web: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    code_postal: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    pays: new FormControl('', Validators.required),
    statut_juridique: new FormControl('', Validators.required),
    tva_ic: new FormControl('', Validators.required),
    siret: new FormControl('', Validators.required),
    code_ape: new FormControl('', Validators.required),
    id_ressource: new FormControl('', Validators.required),
  });

 /* changeCity(e: any) {
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }*/

  //add Societe
  addSociete() {
    if (this.societeForm.valid) {
      console.log(this.societeForm.value);
      this._service.addSocieteSer(this.societeForm.value).subscribe(
        (res) => {
          console.log(res, 'data ==>');

          this.societeForm.reset();
          this.successmsg = 'sociétè ajouter avec succées';
          this.router.navigate(['/societe']);
        },
        (err) => {
          console.log('message erreur', err);
        }
      );
    } else {
      this.errormsg = 'merci de renseigner tous les champs !';
    }
  }
    //get all ressource
    getAllRessource()  {

      this._ressourceService.getAllRessource().subscribe((res:Ressource[])=>{
        this.ressources=res;
        console.log("all ressources ==>",res);
      }/*,(err: any)=>{
        console.log("ERROR",err);}*/)

    }
}
