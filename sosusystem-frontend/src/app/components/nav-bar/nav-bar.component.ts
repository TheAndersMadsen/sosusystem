import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Logout} from "../../modules/auth/auth.actions";
import {Select, Store} from "@ngxs/store";
import {AuthState, AuthStateModel} from 'src/app/modules/auth/auth.state';
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Select(AuthState) username$: Observable<AuthStateModel>;

  @Input()
  title: string;


  @Input()
  username: string;

  constructor(private store: Store, private router: Router) {
    this.username$.subscribe(u => {
      this.username = u.username
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.store
        .dispatch(new Logout())
        .subscribe(() => { void this.router.navigate(['/login']); }
    );
  }
}
