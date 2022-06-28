import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';
import { Societe } from '../models/societe';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients!: Client[];
  successmsg!: string;

  constructor(private _clientService:ClientService) {


  }

  ngOnInit(): void {
    this.getAllClient();
  }



  getAllClient(){
    this._clientService.getAllClient().subscribe((res:Client[])=>{
      this.clients=res;
      console.log('all client ==>',res);

    });
  }
//delete by id
deleteById(id_client:number){
  console.log('deleted id ===>',id_client)
  this._clientService.deleteClientSer(id_client).subscribe((res:Client)=>{
    console.log(res,'deleted res ==>')
    this.successmsg='élèment supprimer avec succées'
    this.getAllClient();
  });
}

}


