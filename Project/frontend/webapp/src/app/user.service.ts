import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {userdata} from './userdata';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public _url="http://localhost:4000/adduser";
  constructor(private http: HttpClient) { }
  poststud(user:userdata):Observable<userdata[]>{
    return this.http.post<userdata[]>(this._url,user);
  }
  getstud():Observable<userdata[]>{
    return this.http.get<userdata[]>("http://localhost:4000/display");
  }
}
