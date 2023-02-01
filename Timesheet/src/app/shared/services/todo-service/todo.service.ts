import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '../../components/features/task-progress/model/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private Api ='http://localhost:3000/data';

  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get<ITask[]>(this.Api)
  }

  addData(data: any){
    return this._http.post(this.Api, this.addData, data)
    // return this._http.post(this.Api, this.addData, dataIdem)
  }
}
