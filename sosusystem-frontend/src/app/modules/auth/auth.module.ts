
import { LoginComponent } from '../../components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { LoginRoutingModule } from './auth.routing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AuthState } from './states/stores/login.state';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    NgxsModule.forFeature([AuthState]),
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }