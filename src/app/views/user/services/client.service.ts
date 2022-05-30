import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl='http://localhost:3000/api/v1/clients';

constructor(private _httpClient:HttpClient) {

 }


  getAllCandidat(): Observable<Client[]>{
    console.log(this.clientUrl);
    return this._httpClient.get<Client[]>(this.clientUrl);
  }
}
