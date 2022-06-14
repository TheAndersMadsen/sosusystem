import { Injectable } from '@angular/core';
import {LoginDto} from '../dtos/login.dto'
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: LoginDto): Observable<any> {
    return this.http.post(`${environment.api}/auth/login`, user);
  }
}
