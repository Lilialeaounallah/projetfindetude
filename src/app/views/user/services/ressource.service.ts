import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressource } from '../models/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  RessourceUrl='http://localhost:3000/api/v1/ressources';

  constructor(private _httpClient:HttpClient) {

   }

    getAllRessource(): Observable<any>{
      return this._httpClient.get<any>(`${this.RessourceUrl}`)
    }
     AddRessourceSer(data:any): Observable<any>{
     return  this._httpClient.post(`${this.RessourceUrl}/new`,data)
    }
   updateRessourceSer(data:any,id_ressource:number): Observable<Ressource> {
      return this._httpClient.put<Ressource>(`${this.RessourceUrl}/${id_ressource}`,data)
    }

    deleteRessourceSer(id_ressource:number): Observable<Ressource>{
      return this._httpClient.delete<Ressource>(`${this.RessourceUrl}/${id_ressource}`)
    }

    //get client by is
    getSingleData(id_ressource:any):Observable<any>{
      return this._httpClient.get(`${this.RessourceUrl}/${id_ressource}`);

    }

}
