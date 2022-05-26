
import {NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {FunctionAbilityComponent} from "./function-ability/function-ability.component";
import {GeneralInfoComponent} from "./general-info/general-info.component";
import {HealthConditionsComponent} from "./health-conditions/health-conditions.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'general-information/:id', component: GeneralInfoComponent, canActivate: [AuthGuard]},
  { path: 'health-conditions/:id', component: HealthConditionsComponent, canActivate: [AuthGuard]},
  { path: 'function-abilities/:id', component: FunctionAbilityComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }