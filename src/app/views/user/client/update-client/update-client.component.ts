import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/model-get/client';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  client!:Client;

  constructor() { }

  ngOnInit(): void {
  }
  modifier(){}

}
