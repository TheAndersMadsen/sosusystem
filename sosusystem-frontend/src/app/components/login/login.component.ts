import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Login} from "../../modules/auth/auth.actions";
import {AuthState} from "../../modules/auth/auth.state";
@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  searchText: any;
  form: FormGroup;
  constructor(private store: Store,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();

    const isLoggedIn = this.store.selectSnapshot(AuthState.isAuthenticated)
    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  initForm() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });

  }

  login() {
    this.store.dispatch(new Login(this.form.getRawValue())).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
