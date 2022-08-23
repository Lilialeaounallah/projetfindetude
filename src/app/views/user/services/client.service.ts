import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client as ClientModel } from '../models/client';
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
     AddClientSer(data:any): Observable<any>{
     return  this._httpClient.post(`${this.clientUrl}/new`,data)
    }
   updateClientSer(data:any,id_client:number): Observable<ClientModel> {
      return this._httpClient.put<ClientModel>(`${this.clientUrl}/${id_client}`,data)
    }

    deleteClientSer(id_client:number): Observable<ClientModel>{
      return this._httpClient.delete<ClientModel>(`${this.clientUrl}/${id_client}`)
    }

    //get client by is
    getSingleData(id:any):Observable<any>{
      return this._httpClient.get(`${this.clientUrl}/${id}`);

    }



}
