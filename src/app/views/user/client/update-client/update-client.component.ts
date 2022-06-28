import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { ClientService } from '../../services/client.service';
@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  errormsg!: string;
  successmsg!: string;
  getparamid: any;

  constructor(
    private _service: ClientService,
    private ActivatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
  //message to verify id getted from url
  console.log(
    this.ActivatedRoute.snapshot.paramMap.get('id_client'),
    '==> id recupérer'
  );

  //get id from url
  this.getparamid=this.ActivatedRoute.snapshot.paramMap.get('id_client');

  //subscribe service getSingle data
  this._service.getSingleData(this.getparamid).subscribe((res)=>{
    console.log(res,'res=>');
    this.clientForm.patchValue({
      civilite:res[0].civilite,
      nom:res[0].nom,
      prenom:res[0].prenom,
      fonction:res[0].fonction,
      service:res[0].service,
      provenance:res[0].provenance,
      libellet_preciser:res[0].libellet_preciser,
      ressource:res[0].ressource,
      agence:res[0].agence,
      societe:res[0].societe,
      etat_client:res[0].etat_client,
      email:res[0].email,
      telephonne:res[0].telephonne,
      adress:res[0].adress,
      code_postal:res[0].code_postal,
      ville:res[0].ville,
      pays:res[0].pays,
      commentaire:res[0].commentaire,
      domaine:res[0].domaine,
      outils:res[0].outils,

    })
  })

}
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
})



  modifier(){
    console.log(this.clientForm.value,'update Societe')

    if(this.clientForm.valid)
    {
      this._service.updateClientSer(this.clientForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'res updated')
        this.successmsg='modification effectuer avec succées '
        this.router.navigate(['/client']);


      });

    }else{
      this.errormsg='veuillez renseigner tout les champs'

    }
  }

}
