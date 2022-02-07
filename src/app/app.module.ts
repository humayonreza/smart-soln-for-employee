import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
// Components
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { SpeechSynthesisModule } from '@kamiazya/ngx-speech-synthesis';
import { RegisterComponent } from './components/register/register.component';
import { RosterComponent } from './components/roster/roster.component';
import { CompliancesComponent } from './components/compliances/compliances.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { ProcesstimesheetComponent } from './components/admin/processtimesheet/processtimesheet.component';
import { CreaterosterComponent } from './components/admin/createroster/createroster.component';
import { ChackcompliancesComponent } from './components/admin/chackcompliances/chackcompliances.component';
import { ManageactComponent } from './components/manageact/manageact.component';
import { NavbarsmartComponent } from './components/navbarsmart/navbarsmart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ModalComponent,
    WeatherComponent,
    RegisterComponent,
    RosterComponent,
    CompliancesComponent,
    TimesheetComponent,
    ProcesstimesheetComponent,
    CreaterosterComponent,
    ChackcompliancesComponent,
    ManageactComponent,
    NavbarsmartComponent,
  ],
  entryComponents: [ModalComponent],
  imports: [
    MatDialogModule,
    SpeechSynthesisModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    SpeechSynthesisModule.forRoot({
      lang: 'en',
      volume: 1.0,
      pitch: 1.1,
      rate: 1.1,
    }),
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LoginComponent,
        },

        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'roster',
          component: RosterComponent,
        },
        {
          path: 'compliances',
          component: CompliancesComponent,
        },
        {
          path: 'time-sheet',
          component: TimesheetComponent,
        },
        {
          path: 'manage/:id1/:id2',
          component: ManageactComponent,
        },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
