import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client as ClientModel } from '../models/client';
import { Clientinsert } from '../models/clientinsert';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl='http://localhost:3000/api/v1/clients';

  constructor(private _httpClient:HttpClient) {

   }


   /* getAllClient(): Observable<Client[]>{
      console.log(this.clientUrl);
      return this._httpClient.get<Client[]>(this.clientUrl);
    }*/

    getAllClient(): Observable<any>{
      return this._httpClient.get<any>(`${this.clientUrl}`)
    }
     AddClient(data:Clientinsert): Observable<Clientinsert>{
     return  this._httpClient.post<Clientinsert>(`${this.clientUrl}`,data)
    }
   updateClient(data:ClientModel): Observable<ClientModel> {
      return this._httpClient.put<ClientModel>(`${this.clientUrl}`,data)
    }
    getClient(id:number): Observable<ClientModel[]>{
      return this._httpClient.get<ClientModel[]>(`${this.clientUrl}/${id}`)
    }
    deleteClient(id:number): Observable<ClientModel>{
      return this._httpClient.delete<ClientModel>(`${this.clientUrl}/${id}`)
    }



}
