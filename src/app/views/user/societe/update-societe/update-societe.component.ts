import { Component, OnInit } from '@angular/core';
import { Societe } from '../../models/societe';

@Component({
  selector: 'app-update-societe',
  templateUrl: './update-societe.component.html',
  styleUrls: ['./update-societe.component.css']
})
export class UpdateSocieteComponent implements OnInit {
  societe: Societe = new Societe('',0,',',',','','',0,'','',0,'','','','','','','','')

  constructor() { }

  ngOnInit(): void {
  }
  modifier(){

  }
}
