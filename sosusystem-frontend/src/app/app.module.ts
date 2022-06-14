import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SubjectsRoutingModule } from './modules/subjects/subjects-routing.module';
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {NgxsModule} from "@ngxs/store";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {AuthState} from "./modules/auth/auth.state";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./modules/auth/auth.guard";
import {CommonModule} from "@angular/common";
import {JwtInterceptor} from "./modules/auth/helpers/http-interceptor";


@NgModule({
  declarations: [
    AppComponent,
      LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([AuthState]),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.token', 'auth.username'],
    }),
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    SubjectsRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
      FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ,],
})
export class AppModule { }
