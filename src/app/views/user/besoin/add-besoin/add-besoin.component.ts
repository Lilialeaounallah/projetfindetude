import { Component, OnInit } from '@angular/core';
import { BesoinService } from '../../services/besoin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-besoin',
  templateUrl: './add-besoin.component.html',
  styleUrls: ['./add-besoin.component.css']
})
export class AddBesoinComponent implements OnInit {

  constructor( private _serviceBesoin:BesoinService) { }

  errormsg!: string;
  successmsg!: string;

  ngOnInit(): void {}

  //definition de forme group
  besoinForm=new FormGroup({
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


  //add besoin
  AddBesoin(){
    if(this.besoinForm.valid){
      console.log(this.besoinForm.value);
      this._serviceBesoin.AddBesoinSer(this.besoinForm.value).subscribe((res)=>{
        console.log('data==>',res);
        this.besoinForm.reset();
        this.successmsg='besoin créer avec succées'
      },
      (err)=>{
        console.log('message erreur',err);
      }
      );
    }else{
      this.errormsg='merci de renseigner tous les champs';
    }
   }

}
