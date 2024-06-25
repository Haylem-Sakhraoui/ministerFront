import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { NavComponent } from './Component/nav/nav.component';
import { authGuard } from './Services/auth/auth.guard.service';
import { MinisterComponent } from './Component/minister/minister.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[authGuard] },
  {path:'nav',component:NavComponent},
  {path:'minister',component:MinisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
