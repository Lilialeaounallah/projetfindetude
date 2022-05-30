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
}
