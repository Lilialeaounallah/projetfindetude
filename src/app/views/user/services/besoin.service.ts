import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Besoin } from '../models/besoin';

@Injectable({
  providedIn: 'root'
})
export class BesoinService {
  besointUrl='http://localhost:3000/api/v1/besoins';

constructor(private _httpClient:HttpClient) {

 }


 getAllBesoin(): Observable<Besoin[]>{
  console.log(this.besointUrl);
  return this._httpClient.get<Besoin[]>(this.besointUrl);
}

/*getAllBesoin(): Observable<any>{
  return this._httpClient.get<any>(`${this.BesoinUrl}`)
}*/

//servie to add besoin
 AddBesoinSer(data:any): Observable<any>{
 return  this._httpClient.post(`${this.besointUrl}/new`,data)
}

//service that will update besoin
updateBesoinSer(data:any,id_besoin:number): Observable<Besoin> {
  return this._httpClient.put<Besoin>(`${this.besointUrl}/${id_besoin}`,data)
}

//service that delete besoin by id
deleteBesoinSer(id_besoin:number): Observable<Besoin>{
  return this._httpClient.delete<Besoin>(`${this.besointUrl}/${id_besoin}`)
}

//service that get besoin by is
getSingleData(id_besoin:any):Observable<any>{
  return this._httpClient.get(`${this.besointUrl}/${id_besoin}`);

}
}
