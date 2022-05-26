import { Injectable } from '@angular/core';
import {LoginDto} from '../dtos/login.dto'
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";

const URL = 'http://185.51.76.10:61001';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: LoginDto): Observable<any> {
    return this.http.post(`${URL}/authentication/log-in`, user);
  }
}
