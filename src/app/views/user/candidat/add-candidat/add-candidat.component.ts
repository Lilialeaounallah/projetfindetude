import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../../services/candidat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  constructor(private _candidatService : CandidatService) {
  }

  errormsg!: string;
  successmsg!: string;

  ngOnInit(): void {}

  //form group candidat
  candidatForm=new FormGroup({
   'civilite':new FormControl('', Validators.required),
    'nom': new FormControl('', Validators.required),
    'prenom': new FormControl('', Validators.required),
    'Date_de_naissance': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'telephonne': new FormControl('', Validators.required),
    'adress': new FormControl('', Validators.required),
    'ville': new FormControl('', Validators.required),
    'code_postal': new FormControl('', Validators.required),
    'pays': new FormControl('', Validators.required),
    'etat_condidat': new FormControl('', Validators.required),
    'provenance': new FormControl('', Validators.required),
    'disponibilite': new FormControl('', Validators.required),
    'mobilite': new FormControl('', Validators.required),
    'responsable_manager': new FormControl('', Validators.required),
    'agence': new FormControl('', Validators.required),
    'evaluation': new FormControl('', Validators.required),
    'commentaire' :new FormControl('', Validators.required)

  });


//function to add candidat
  AddCandidat(){
    if(this.candidatForm.valid){
      console.log(this.candidatForm.value);
      this._candidatService.AddCandidatSer(this.candidatForm.value).subscribe((res)=>{
        console.log('data==>',res);
        this.candidatForm.reset();
        this.successmsg='candidat créer avec succées'
      },
      (err)=>{
        console.log('message erreur',err);
      }
      );
    }else{
      this.errormsg='merci de renseigner tous les champs';
    }}
}
