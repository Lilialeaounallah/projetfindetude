import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../../services/candidat.service';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css'],
})
export class UpdateCandidatComponent implements OnInit {
  errormsg!: string;
  successmsg!: string;
  getparamid: any;


  constructor(
    private _candidatService: CandidatService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //message to verify id getted from url
    console.log(
      this.ActivatedRoute.snapshot.paramMap.get('id_condidat'),
      '==> id recupérer'
    );
CandidatService
    //get id from url
    this.getparamid = this.ActivatedRoute.snapshot.paramMap.get('id_condidat');

    //subscribe service getSingle data
    this._candidatService.getSingleDataSer(this.getparamid).subscribe((res) => {
      console.log(res, 'res=>');
      this.candidatForm.patchValue({
        civilite: res[0].civilite,
        nom: res[0].nom,
        prenom: res[0].prenom,
        Date_de_naissance: res[0].Date_de_naissance,
        email: res[0].email,
        telephonne: res[0].telephonne,
        adress: res[0].adress,
        ville: res[0].ville,
        code_postal: res[0].code_postal,
        pays: res[0].pays,
        etat_condidat: res[0].etat_condidat,
        provenance: res[0].provenance,
        disponibilite: res[0].disponibilite,
        mobilite: res[0].mobilite,
        responsable_manager: res[0].responsable_manager,
        agence: res[0].agence,
        evaluation: res[0].evaluation,
        commentaire: res[0].commentaire,
      });
    });
  }
  candidatForm = new FormGroup({
    civilite: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    Date_de_naissance: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telephonne: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    code_postal: new FormControl('', Validators.required),
    pays: new FormControl('', Validators.required),
    etat_condidat: new FormControl('', Validators.required),
    provenance: new FormControl('', Validators.required),
    disponibilite: new FormControl('', Validators.required),
    mobilite: new FormControl('', Validators.required),
    responsable_manager: new FormControl('', Validators.required),
    agence: new FormControl('', Validators.required),
    evaluation: new FormControl('', Validators.required),
    commentaire: new FormControl('', Validators.required),
  });
  modifier() {
    console.log(this.candidatForm.value, 'update client');

    if (this.candidatForm.valid) {
      this._candidatService
        .updateCandidatSer(this.candidatForm.value, this.getparamid)
        .subscribe((res) => {
          console.log(res, 'res updated');
          this.successmsg = 'modification effectuer avec succées ';
          this.router.navigate(['/candidat']);
        });
    } else {
      this.errormsg = 'veuillez renseigner tout les champs';
    }
  }
}
