import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Societe } from '../models/societe';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  SocieteUrl='http://localhost:3000/api/v1/societes';

  constructor(private _httpClient:HttpClient) {

   }


    getAllPositionnement(): Observable<Societe[]>{
      console.log(this.SocieteUrl);
      return this._httpClient.get<Societe[]>(this.SocieteUrl);
    }
}
