import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../../../environments/environment";

import {AuthState} from "../auth.state";
import { Store } from '@ngxs/store';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private store: Store) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.store.selectSnapshot(AuthState.token)
        const isLoggedIn = this.store.selectSnapshot(AuthState.isAuthenticated)
        const isApiUrl = request.url.startsWith(environment.api);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
        return next.handle(request);
    }
}