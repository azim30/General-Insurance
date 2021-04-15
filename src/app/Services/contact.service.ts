import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observer} from 'rxjs';
import { ContactModule } from '../Modules/contact/contact.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  usr: ContactModule;
  http: HttpClient;
  url: string = 'http://localhost:54887/api/UserAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) { this.http=http; }
  GetUsers(): Observable<ContactModule[]>
  {
    return this.http.get<ContactModule[]>(this.url+'/'+'GetAllContact');
  }
  
 
  RegisterCon(usr: ContactModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'Contact',usr, this.httpOptions);
  }
}
