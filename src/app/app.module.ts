import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ClaimComponent } from './Component/claim/claim.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { LoginComponent } from './Component/login/login.component';
import { MinisterComponent } from './Component/minister/minister.component';
import { NavComponent } from './Component/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './auth-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    MinisterComponent,
    EmployeeComponent,
    ClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ButtonModule,
    PasswordModule,
    MatToolbarModule,
    DialogModule
  ],
  providers: [MessageService,{provide: HTTP_INTERCEPTORS ,useClass: TokenInterceptor,multi:true}], // Provide MessageService for Toast messages
  bootstrap: [AppComponent]
})
export class AppModule { }
