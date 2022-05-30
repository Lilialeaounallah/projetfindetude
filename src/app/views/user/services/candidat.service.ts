import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  candidatUrl='http://localhost:3000/api/v1/candidats';

  constructor(private _httpClient:HttpClient) {

   }


    getAllCandidat(): Observable<Candidat[]>{
      console.log(this.candidatUrl);
      return this._httpClient.get<Candidat[]>(this.candidatUrl);
    }
    getCandidatById(id: number): Observable<Candidat>{
      return this._httpClient.get<Candidat>(`${this.candidatUrl}/${id}`);
    }

    updateCandidat(id:number, body: Candidat): Observable<Candidat> {
      return this._httpClient.put<Candidat>(`${this.candidatUrl}/${id}`, body);
    }
   }

