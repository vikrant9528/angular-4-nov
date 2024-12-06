import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private _http:HttpClient) { }


  getuser():Observable<any>{
    return this._http.get('http://localhost:3000/posts');
  }

  addUser(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/posts',data)
  }
  deleteUser(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/posts/${id}`)
  }
  editUser(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/posts/${id}`,data);
  }
}
