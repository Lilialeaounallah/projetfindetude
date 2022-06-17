import { Positionnement } from '../models/model-get/Positionnement';
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


  getAllPositionnement(): Observable<Positionnement[]>{
    console.log(this.PositionnementUrl);
    return this._httpClient.get<Positionnement[]>(this.PositionnementUrl);
  }


}
