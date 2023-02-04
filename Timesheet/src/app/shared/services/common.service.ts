import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public url: string = "http://localhost:3000/data";

  constructor(private _http: HttpClient) {
   }
   
   getData(){
    return this._http.get(this.url);
   }

   postData(payload:any){
    return this._http.post(this.url, payload);
   }
}
