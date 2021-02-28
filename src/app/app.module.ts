import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CreateorgComponent } from './createorg/createorg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
// MAT Start
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AlgoComponent } from './algo/algo.component';
// MAT End
@NgModule({
  declarations: [
    AppComponent,
    CreateorgComponent,
    NavbarComponent,
    RegisterComponent,
    AlgoComponent,
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'register',
          component: RegisterComponent,
        },
        {
          path: 'create-org',
          component: CreateorgComponent,
        },
        {
          path: 'algo',
          component: AlgoComponent,
        },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
