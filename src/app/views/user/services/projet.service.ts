import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  ProjetUrl='http://localhost:3000/api/v1/projets';

  constructor(private _httpClient:HttpClient) {

   }


   /* getAllProjet(): Observable<Projet[]>{
      console.log(this.ProjetUrl);
      return this._httpClient.get<Projet[]>(this.ProjetUrl);
    }*/

    //service to get all project
    getAllProjet(): Observable<any>{
    return this._httpClient.get<any>(`${this.ProjetUrl}`)
  }

    //service to add projet
   AddProjetSer(data:any): Observable<any>{
    return  this._httpClient.post(`${this.ProjetUrl}/new`,data)
   }

   //service to update Projet
  updateProjetSer(data:any,id_projet:number): Observable<Projet> {
     return this._httpClient.put<Projet>(`${this.ProjetUrl}/${id_projet}`,data)
   }

     //service to delete Projet
   deleteProjetSer(id_projet:number): Observable<Projet>{
     return this._httpClient.delete<Projet>(`${this.ProjetUrl}/${id_projet}`)
   }

   //service to get Projet by id
   getSingleData(id_projet:any):Observable<any>{
     return this._httpClient.get(`${this.ProjetUrl}/${id_projet}`);

   }


}
