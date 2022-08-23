import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from '../../services/projet.service';


@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  constructor(private _service: ProjetService) { }
  errormsg!: string;
  successmsg!: string;

  ngOnInit(): void {
  }

  //definition of form group
  projetForm = new FormGroup({
    nom_societe: new FormControl('', Validators.required),
    titre_besoin: new FormControl('', Validators.required),
    candidat_nom: new FormControl('', Validators.required),
    candidat_prenom: new FormControl('', Validators.required),
    client_nom: new FormControl('', Validators.required),
    client_prenom: new FormControl('', Validators.required),
    etat_positionnement: new FormControl('', Validators.required),
    etat_projet: new FormControl('', Validators.required),
    commentaire: new FormControl('', Validators.required)
  });


  //add projet
  addProjet(){
    if (this.projetForm.valid) {
      console.log(this.projetForm.value);
      this._service.AddProjetSer(this.projetForm.value).subscribe(
        (res) => {
          console.log(res, 'data ==>');

          this.projetForm.reset();
          this.successmsg = 'Projet ajouter avec succées';
        },
        (err) => {
          console.log('message erreur', err);
        }
      );
    } else {
      this.errormsg = 'merci de renseigner tous les champs !';
    }
  }

}
