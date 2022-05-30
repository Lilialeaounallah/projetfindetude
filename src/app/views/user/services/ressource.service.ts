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


    getAllPositionnement(): Observable<Ressource[]>{
      console.log(this.RessourceUrl);
      return this._httpClient.get<Ressource[]>(this.RessourceUrl);
    }
}
