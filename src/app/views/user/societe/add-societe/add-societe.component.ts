import { Component, OnInit } from '@angular/core';
import { Societe } from '../../models/societe';

@Component({
  selector: 'app-add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.css']
})
export class AddSocieteComponent implements OnInit {
  societe: Societe = new Societe('',0,',',',','','',0,'','',0,'','','','','','','','')
  constructor() { }

  ngOnInit(): void {
  }
  ajout(f:any){
    console.log("adddd")
  }

}
