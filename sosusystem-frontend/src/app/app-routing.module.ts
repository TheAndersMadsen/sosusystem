import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'login',
    loadChildren: () =>  import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: '',
    loadChildren: () => import('./modules/subjects/subjects.module').then(m => m.SubjectsModule )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
