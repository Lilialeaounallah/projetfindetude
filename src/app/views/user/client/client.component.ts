import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client as ClientModel } from '../models/model-get/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients!: ClientModel[];

  constructor(private _clientService:ClientService, private router:Router) {


  }

  ngOnInit(): void {
    this.getAllClient();
  }
  getAllClients() {

    this._clientService.getAllClient().subscribe((data: ClientModel[])=>{
      this.clients=data;
      console.log("aaa",this.clients);
    },err=>{
      console.log("ERROR",err);
    })
  }


  getAllClient(){
    return this._clientService.getAllClient().subscribe((data)=>{
      this.clients= data;
      console.log("liste des client    :",this.clients)
    },err=>{
      console.log("erreur",err)
    })
  }
}


