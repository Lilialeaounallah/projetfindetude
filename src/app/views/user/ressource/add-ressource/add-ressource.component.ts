import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../services/ressource.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ressource',
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.css']
})
export class AddRessourceComponent implements OnInit {

  constructor(private _serviceRessource:RessourceService) { }
  errormsg!: string;
  successmsg!: string;

  ngOnInit(): void {
  }

  //definition de forme group
  ressourceForm=new FormGroup({
    titre: new FormControl('', Validators.required),
    reference_besoin: new FormControl('', Validators.required),
    nom_client: new FormControl('', Validators.required),
    nom_societe: new FormControl('', Validators.required),
    etat_besoin: new FormControl('', Validators.required),
    type_besoin: new FormControl('', Validators.required),
      discription: new FormControl('', Validators.required),
      domaine: new FormControl('', Validators.required),
      devis: new FormControl('', Validators.required),
      budget_envisage: new FormControl('', Validators.required),
      ponderation: new FormControl('', Validators.required),
      ca_envisage: new FormControl('', Validators.required),
      ca_pondere: new FormControl('', Validators.required),
      duree: new FormControl('', Validators.required),
      date_demarrage: new FormControl('', Validators.required),
      date_cloture: new FormControl('', Validators.required),
      date_reponse: new FormControl('', Validators.required),
      commentaire: new FormControl('', Validators.required)

  });


  //add ressource
  AddRessource(){
    if(this.ressourceForm.valid){
      console.log(this.ressourceForm.value);
      this._serviceRessource.AddRessourceSer(this.ressourceForm.value).subscribe((res:any)=>{
        console.log('data==>',res);
        this.ressourceForm.reset();
        this.successmsg='besoin créer avec succées'
      },
      (err:any)=>{
        console.log('message erreur',err);
      }
      );
    }else{
      this.errormsg='merci de renseigner tous les champs';
    }
   }


}
