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

    addClient(client: Client): Observable<any>{
      return this._httpClient.post(this.clientUrl+"/add",client);
    }
    getAllClient(): Observable<Client[]>{
      console.log(this.clientUrl);
      return this._httpClient.get<Client[]>(this.clientUrl);
    }
    getClientById(id: number): Observable<Client>{
      return this._httpClient.get<Client>(`${this.clientUrl}/${id}`);
    }

    updateClient(id:number, body: Client): Observable<Client> {
      return this._httpClient.put<Client>(`${this.clientUrl}/${id}`, body);
    }



}
