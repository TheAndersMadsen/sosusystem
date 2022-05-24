import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './dashboard-routing.module';
import { FunctionAbilityComponent } from './function-ability/function-ability.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HealthConditionsComponent } from './health-conditions/health-conditions.component';
import { NavModalComponent } from './nav-modal/nav-modal.component';
import {FooterComponent} from "../footer/footer.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {SubcategoryModalComponentHealth} from "../subcategory-modal-health/subcategory-modal.component-health";
import {SubcategoryModalFunctionComponent} from "../subcategory-modal-function/subcategory-modal-function.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FunctionAbilityComponent,
    GeneralInfoComponent,
    HealthConditionsComponent,
    NavModalComponent,
    FooterComponent,
    NavBarComponent,
    SubcategoryModalComponentHealth,
    SubcategoryModalFunctionComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
      ReactiveFormsModule


  ]
})
export class SubjectsModule { }
