
import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FunctionAbilityComponent} from "./function-ability/function-ability.component";
import {GeneralInfoComponent} from "./general-info/general-info.component";
import {HealthConditionsComponent} from "./health-conditions/health-conditions.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'general-information/:id', component: GeneralInfoComponent },
  { path: 'health-conditions/:id', component: HealthConditionsComponent },
  { path: 'function-abilities/:id', component: FunctionAbilityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }