import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  candidatUrl='http://192.168.100.119:3000/api/v1/candidats';

  constructor(private _httpClient:HttpClient) {

   }

    addCandidat(candidat: Candidat): Observable<any>{
      return this._httpClient.post(this.candidatUrl,candidat);
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

