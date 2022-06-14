import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Store} from "@ngxs/store";
import {AuthState} from "./auth.state";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store, private router: Router) {}

    canActivate() {
        const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
        if (!isAuthenticated) {
            this.router.navigate(['/login']);
            return false;
        }
        return isAuthenticated;
    }
}