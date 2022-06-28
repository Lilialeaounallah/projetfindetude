import { Positionnement } from '../models/Positionnement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionnementService {

  PositionnementUrl='http://localhost:3000/api/v1/positionnements';

constructor(private _httpClient:HttpClient) {

 }

  //get all positionnement
  getAllPositionnement(): Observable<Positionnement[]>{
    console.log(this.PositionnementUrl);
    return this._httpClient.get<Positionnement[]>(this.PositionnementUrl);
  }
  /*getAllClient(): Observable<any>{
    return this._httpClient.get<any>(`${this.clientUrl}`)
  }*/

    //add positionnement
   AddClientSer(data:any): Observable<any>{
   return  this._httpClient.post(`${this.PositionnementUrl}/new`,data)
  }
 updateClientSer(data:any,id_positionnement:number): Observable<Positionnement> {
    return this._httpClient.put<Positionnement>(`${this.PositionnementUrl}/${id_positionnement}`,data)
  }

    //delete positionnement
    deletePositionnementSer(id_positionnement:number): Observable<Positionnement>{
    return this._httpClient.delete<Positionnement>(`${this.PositionnementUrl}/${id_positionnement}`)
  }

  //get positionnement by id
  getSingleData(id_positionnement:any):Observable<any>{
    return this._httpClient.get(`${this.PositionnementUrl}/${id_positionnement}`);

  }



}
