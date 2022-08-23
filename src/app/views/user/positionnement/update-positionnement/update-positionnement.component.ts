import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PositionnementService } from '../../services/positionnement.service';

@Component({
  selector: 'app-update-positionnement',
  templateUrl: './update-positionnement.component.html',
  styleUrls: ['./update-positionnement.component.css']
})
export class UpdatePositionnementComponent implements OnInit {
  errormsg!: string;
  successmsg!: string;
  getparamid: any;


  constructor(
    private _servicePO: PositionnementService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

//message to verify id getted from url
console.log(
  this.ActivatedRoute.snapshot.paramMap.get('id_positionnement'),
  '==> id recupérer'
);

//get id from url
this.getparamid = this.ActivatedRoute.snapshot.paramMap.get('id_positionnement');

 //subscribe service getSingle data
 this._servicePO.getSingleDataSer(this.getparamid).subscribe((res) => {
  console.log(res, 'res=>');
  this.positionnementForm.patchValue({

    titre_besoin: res[0].titre_besoin,
    candidat_nom: res[0].candidat_nom,
    etat_positionnement: res[0].etat_positionnement,

  });
});


  }
   //definition of form group
   positionnementForm = new FormGroup({
    titre_besoin: new FormControl('', Validators.required),
    candidat_nom: new FormControl('', Validators.required),
    etat_positionnement: new FormControl('', Validators.required),

});

modifier() {
  console.log(this.positionnementForm.value, 'update Positionnement');

  if (this.positionnementForm.valid) {
    this._servicePO
      .updateClientSer(this.positionnementForm.value, this.getparamid)
      .subscribe((res) => {
        console.log(res, 'res updated');
        this.successmsg = 'modification effectuer avec succées ';
        this.router.navigate(['/positionnement']);
      });
  } else {
    this.errormsg = 'veuillez renseigner tout les champs';
  }
}

}
