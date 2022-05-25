import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/pages/login/login.component';


const routes: Routes = [
  { path: 'login',
    loadChildren: () =>  import('.//login/login.module').then((m) => m.LoginModule) },
  { path: '',
    loadChildren: () => import('./subjects/dashboard.module').then(m => m.SubjectsModule )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
