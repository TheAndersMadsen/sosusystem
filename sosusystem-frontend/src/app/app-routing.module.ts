import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from "./modules/auth/auth.guard";


const routes: Routes = [
  { path: 'login',
    component: LoginComponent},
{ path: 'dashboard',
    loadChildren: () => import('./modules/subjects/subjects.module').then(m => m.SubjectsModule ),
    canActivate: [AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
