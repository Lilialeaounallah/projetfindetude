import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BesoinService } from '../../services/besoin.service';

@Component({
  selector: 'app-update-besoin',
  templateUrl: './update-besoin.component.html',
  styleUrls: ['./update-besoin.component.css'],
})
export class UpdateBesoinComponent implements OnInit {
  errormsg!: string;
  successmsg!: string;
  getparamid: any;

  constructor(
    private _service: BesoinService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //message to verify id getted from url
    console.log(
      this.ActivatedRoute.snapshot.paramMap.get('id_besoin'),
      '==> id recupérer'
    );

    //get id from url
    this.getparamid = this.ActivatedRoute.snapshot.paramMap.get('id_besoin');

    //subscribe service get single data
    this._service.getSingleData(this.getparamid).subscribe((res) => {
      console.log('res==>', res);

      this.besoinForm.patchValue({
        titre: res[0].titre,
        reference_besoin: res[0].reference_besoin,
        nom_client: res[0].nom_client,
        nom_societe: res[0].nom_societe,
        etat_besoin: res[0].etat_besoin,
        type_besoin: res[0].type_besoin,
        discription: res[0].discription,
        domaine: res[0].domaine,
        devis: res[0].devis,
        budget_envisage: res[0].budget_envisage,
        ponderation: res[0].ponderation,
        ca_envisage: res[0].ca_envisage,
        ca_pondere: res[0].ca_pondere,
        duree: res[0].duree,
        date_demarrage: res[0].date_demarrage,
        date_cloture: res[0].date_cloture,
        date_reponse: res[0].date_reponse,
        commentaire: res[0].commentaire,
      });
    });
  }
  //definition de forme group
  besoinForm = new FormGroup({
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
    commentaire: new FormControl('', Validators.required),
  });

  //function update
  modifier() {
    console.log(this.besoinForm.value, 'update besoin');

    if (this.besoinForm.valid) {
      this._service
        .updateBesoinSer(this.besoinForm.value, this.getparamid)
        .subscribe((res) => {
          console.log(res, 'res updated');
          this.successmsg = 'modification effectuer avec succées ';
          this.router.navigate(['/besoin']);
        });
    } else {
      this.errormsg = 'veuillez renseigner tout les champs';
    }
  }
}
