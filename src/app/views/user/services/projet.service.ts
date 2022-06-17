import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../models/model-get/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  ProjetUrl='http://localhost:3000/api/v1/projets';

  constructor(private _httpClient:HttpClient) {

   }


    getAllProjet(): Observable<Projet[]>{
      console.log(this.ProjetUrl);
      return this._httpClient.get<Projet[]>(this.ProjetUrl);
    }
}
