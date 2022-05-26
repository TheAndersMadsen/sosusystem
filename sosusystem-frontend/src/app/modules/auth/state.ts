import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AuthStateModel, Login, Logout} from "./auth.state.model";
import {tap} from "rxjs";
import {LoginService} from "../../services/login.service";

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        token: null,
        userName: null
    }
})
@Injectable()
export class AuthState {
    @Selector()
    static token(state: AuthStateModel): string | null {
        return state.token;
    }

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
        return !!state.token;
    }

    constructor(private authService: LoginService) {}

    @Action(Logout)
    // tslint:disable-next-line: typedef
    logout({ setState, getState }: StateContext<AuthStateModel>) {
        const { token } = getState();
        setState(
            {
                userName: null,
                token: null
            }
        );
    }

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        return this.authService.login(action.payload).pipe(
            tap((result: { token: string }) => {
                ctx.patchState({
                    token: result.token,
                    userName: action.payload.userName
                });
            })
        );
    }


}