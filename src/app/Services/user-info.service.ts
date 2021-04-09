import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observer} from 'rxjs';
import { UserInfoModule } from '../Modules/user-info/user-info.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  usr: UserInfoModule;
  http: HttpClient;
  url: string = 'http://localhost:49356/api/UserAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) { this.http=http; }
  GetUsers(): Observable<UserInfoModule[]>
  {
    return this.http.get<UserInfoModule[]>(this.url+'/'+'GetAllUsers');
  }
  
  Login(mob: number, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/'+ 'Login'+'/'+ mob +'/'+pwd);
  }
  Register(usr: UserInfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'Register',usr, this.httpOptions);
  }
}
