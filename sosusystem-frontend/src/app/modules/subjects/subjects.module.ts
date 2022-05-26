import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { FunctionAbilityComponent } from './function-ability/function-ability.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HealthConditionsComponent } from './health-conditions/health-conditions.component';
import { NavModalComponent } from './nav-modal/nav-modal.component';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";
import {SubcategoryModalComponentHealth} from "./subcategory-modal-health/subcategory-modal.component-health";
import {SubcategoryModalFunctionComponent} from "./subcategory-modal-function/subcategory-modal-function.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../../app.module";



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
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SubjectsModule { }
