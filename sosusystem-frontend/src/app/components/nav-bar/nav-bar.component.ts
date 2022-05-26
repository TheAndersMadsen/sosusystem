import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Login, Logout} from "../../modules/auth/auth.state.model";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input()
  title: string;
  constructor(private store: Store, private router: Router) { }
  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new Logout()).subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }

}
