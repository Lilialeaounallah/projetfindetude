import { Posiionnement } from './../models/posiionnement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionnementService {

  PositionnementUrl='http://localhost:3000/api/v1/positionnement';

constructor(private _httpClient:HttpClient) {

 }


  getAllPositionnement(): Observable<Posiionnement[]>{
    console.log(this.PositionnementUrl);
    return this._httpClient.get<Posiionnement[]>(this.PositionnementUrl);
  }


}
