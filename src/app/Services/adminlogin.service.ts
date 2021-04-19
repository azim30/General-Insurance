import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer} from 'rxjs';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  http: HttpClient;
  url: string = 'http://localhost:54887/api/AdminAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) { this.http=http; }
  Login(mob: number, pwd: string): Observable<string>
  {
    return this.http.get<string>(this.url + '/'+ 'Login'+'/'+ mob +'/'+pwd);
  }
}
