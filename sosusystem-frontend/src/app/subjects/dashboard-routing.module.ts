
import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FunctionAbilityComponent} from "./function-ability/function-ability.component";
import {GeneralInfoComponent} from "./general-info/general-info.component";
import {HealthConditionsComponent} from "./health-conditions/health-conditions.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'function-abilities', component: FunctionAbilityComponent },
  { path: 'general-information', component: GeneralInfoComponent },
  { path: 'health-conditions', component: HealthConditionsComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'general-information/:id', component: GeneralInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }