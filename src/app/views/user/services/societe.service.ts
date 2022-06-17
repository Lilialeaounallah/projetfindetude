import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Societe } from '../models/model-get/societe';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  SocieteUrl='http://localhost:3000/api/v1/societes';

  constructor(private _httpClient:HttpClient) {

   }



    getAllSociete(): Observable<Societe[]>{
      console.log(this.SocieteUrl);
      return this._httpClient.get<Societe[]>(this.SocieteUrl);
    }
}
