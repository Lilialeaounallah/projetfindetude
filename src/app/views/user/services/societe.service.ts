import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Societe } from '../models/societe';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor(private _httpClient:HttpClient) {}

  //connect backend to frontend
  SocieteUrl='http://localhost:3000/api/v1/societes';


//get all societe
    getAllSociete(): Observable<Societe[]>{
      console.log(this.SocieteUrl);
      return this._httpClient.get<Societe[]>(this.SocieteUrl);
    }

  //add new societe
  addSocieteSer(data:any):Observable<any>{
    console.log(data,'add societe ==>');
    return this._httpClient.post(`${this.SocieteUrl}/add`,data);
  }


  //delete societe
deleteSocieteSer(id_societe:number):Observable<Societe>
{

  return this._httpClient.delete<Societe>(`${this.SocieteUrl}/${id_societe}`);


}

//update Societe
updateSociete(data:any,id_societe:number):Observable<Societe>{
  return this._httpClient.put<Societe>(`${this.SocieteUrl}/${id_societe}`,data);
}

  //get single data
  getSingleData(id_societe:any):Observable<any>
  {

    return this._httpClient.get(`${this.SocieteUrl}/${id_societe}`);


  }


}

