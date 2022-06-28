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
   /*getAllCandidat(): Observable<any>{
  return this._httpClient.get<any>(`${this.candidatUrl}`)
}*/

//servie to add Candidat
 AddCandidatSer(data:any): Observable<any>{
  return  this._httpClient.post(`${this.candidatUrl}/new`,data)
 }

 //service that will update Candidat
 updateCandidatSer(data:any,id_candidat:number): Observable<Candidat> {
   return this._httpClient.put<Candidat>(`${this.candidatUrl}/${id_candidat}`,data)
 }

 //service that delete Candidat by id
 deleteCandidatSer(id_candidat:number): Observable<Candidat>{
   return this._httpClient.delete<Candidat>(`${this.candidatUrl}/${id_candidat}`)
 }

 //service that get Candidat by is
 getCandidatData(id_candidat:any):Observable<any>{
   return this._httpClient.get(`${this.candidatUrl}/${id_candidat}`);

 }
   }

