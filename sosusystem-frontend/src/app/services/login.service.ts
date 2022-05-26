import { Injectable } from '@angular/core';
import {User} from '../models/User'
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";

const URL = 'http://185.51.76.10:61001';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${URL}/authentication/log-in`, user);
  }
}
