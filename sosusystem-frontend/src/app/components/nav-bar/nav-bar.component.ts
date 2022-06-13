import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Logout} from "../../modules/auth/auth.actions";
import {Store} from "@ngxs/store";
import { AuthState } from 'src/app/modules/auth/auth.state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  username: string | null

  constructor(private store: Store, private router: Router) {
    this.username = this.store.selectSnapshot(AuthState.user)
  }

  ngOnInit(): void {
  }


  logout() {
    this.store.dispatch(new Logout()).subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }

}
