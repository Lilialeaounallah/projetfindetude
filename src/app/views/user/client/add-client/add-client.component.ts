import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client=new Client(0,'','','','','','','','','','','','','','','','','','','');
  constructor(private clientService : ClientService) {
  }

  ngOnInit(): void {
  }
  ajout(f:any){

    // call api and add send it to backends

    console.log("client ",this.client);
    this.clientService.addClient(this.client).subscribe(data=>{
      console.log("candidat added successfully", data);

    },err=>{
      console.log("Error",err)
    })


  }

}
