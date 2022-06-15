import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Login} from "../../modules/auth/auth.actions";
@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private store: Store,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });

  }

  login() {
    this.store.dispatch(new Login(this.form.getRawValue())).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
