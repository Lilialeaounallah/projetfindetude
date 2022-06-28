import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  //Client = new Clientinsert ('','','','','',0,'',0,'',0,0,'','','','','','','',0,0)
  constructor(private _serviceClient: ClientService) {}
  errormsg!: string;
  successmsg!: string;

  ngOnInit(): void {}


//definition of form group
clientForm = new FormGroup({
    'civilite': new FormControl('', Validators.required),
    'nom': new FormControl('', Validators.required),
    'prenom': new FormControl('', Validators.required),
    'fonction': new FormControl('', Validators.required),
    'service': new FormControl('', Validators.required),
    'provenance': new FormControl('', Validators.required),
    'libellet_preciser': new FormControl('', Validators.required),
    'ressource': new FormControl('', Validators.required),
    'agence': new FormControl('', Validators.required),
    'societe': new FormControl('', Validators.required),
    'etat_client': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'telephonne': new FormControl('', Validators.required),
    'adress': new FormControl('', Validators.required),
    'code_postal': new FormControl('', Validators.required),
    'ville': new FormControl('', Validators.required),
    'pays': new FormControl('', Validators.required),
    'commentaire': new FormControl('', Validators.required),
    'domaine': new FormControl('', Validators.required),
    'outils': new FormControl('', Validators.required),
  });

 //add client
 AddClient(){
  if(this.clientForm.valid){
    console.log(this.clientForm.value);
    this._serviceClient.AddClientSer(this.clientForm.value).subscribe((res)=>{
      console.log('data==>',res);
      this.clientForm.reset();
      this.successmsg='client ajouter avec succées'
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
