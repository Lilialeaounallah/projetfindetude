
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientinsert } from '../../models/clientinsert';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  Client = new Clientinsert ('','','','','',0,'',0,'',0,0,'','','','','','','',0,0)
  constructor(private _serviceClient:ClientService,private router:Router) { }


  ngOnInit(): void {
  }

  ajout(){
 this._serviceClient.AddClient(this.Client).subscribe()
 this.router.navigate(['/']);
  }

  redirect(){
    this.router.navigate(['/src/app/views/user/client/add-client']);
}

}
