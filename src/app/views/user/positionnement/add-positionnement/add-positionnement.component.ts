import { Component, OnInit } from '@angular/core';
import { PositionnementService } from '../../services/positionnement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-positionnement',
  templateUrl: './add-positionnement.component.html',
  styleUrls: ['./add-positionnement.component.css'],
})
export class AddPositionnementComponent implements OnInit {
  constructor(private _service: PositionnementService) {}
  errormsg!: string;
  successmsg!: string;

  ngOnInit(): void {}

  //definition of form group
  positionnementForm = new FormGroup({
    titre_besoin: new FormControl('', Validators.required),
    candidat_nom: new FormControl('', Validators.required),
    etat_positionnement: new FormControl('', Validators.required),
  });

  //add Positionnement
  addSPositionnement() {
    if (this.positionnementForm.valid) {
      console.log(this.positionnementForm.value);
      this._service
        .AddPositionnementSer(this.positionnementForm.value)
        .subscribe(
          (res: any) => {
            console.log(res, 'data ==>');

            this.positionnementForm.reset();
            this.successmsg = 'positionnement effectueée avec succées';
          },
          (err: any) => {
            console.log('message erreur', err);
          }
        );
    } else {
      this.errormsg = 'merci de renseigner tous les champs !';
    }
  }
}
