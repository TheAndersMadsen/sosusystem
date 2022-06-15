import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Login, Logout} from "./auth.actions";
import {tap} from "rxjs";
import {LoginService} from "../../services/login.service";


export interface AuthStateModel {
    token: string;
    username: string;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        username: '',
        token: '',
    }
})


@Injectable()
export class AuthState {
    @Selector()
    static token(state: AuthStateModel): string {
        return state.token;
    }

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
        return !!state.token;
    }

    constructor(private authService: LoginService) {}

    @Action(Login, { cancelUncompleted: true })
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        return this.authService.login(action.payload).pipe(
            tap((result: { token: string, username: string }) => {
                ctx.setState({
                    username: result.username,
                    token: result.token
                });
            })
        );
    }
    @Action(Logout, { cancelUncompleted: true })
    logout({ setState }: StateContext<AuthStateModel>) {
        setState(
            {
                username: '',
                token: ''
            }
        );
    }
}