import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CitizenGeneralInfoComponent } from './citizen-general-info/citizen-general-info.component';
import { CitizenHealthConditionsComponent } from './citizen-health-conditions/citizen-health-conditions.component';
import { FooterComponent } from './footer/footer.component';
import { CitizenNavModalComponent } from './citizen-nav-modal/citizen-nav-modal.component';
import { SubcategoryModalComponentHealth } from './subcategory-modal-health/subcategory-modal.component-health';
import { CitizenFunctionAbilityComponent } from './citizen-funtion-ability/citizen-function-ability.component';
import { SubcategoryModalFunctionComponent } from './subcategory-modal-function/subcategory-modal-function.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    CitizenGeneralInfoComponent,
    CitizenHealthConditionsComponent,
      CitizenHealthConditionsComponent,
      FooterComponent,
      CitizenNavModalComponent,
      SubcategoryModalComponentHealth,
      CitizenFunctionAbilityComponent,
      SubcategoryModalFunctionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
      FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
