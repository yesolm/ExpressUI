import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/account/login/login.component';
import { ClientComponent } from './pages/client/client.component';
import { CreatePatientComponent } from './pages/patients/create-patient/create-patient.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { SearchComponent } from './pages/patients/search/search.component';
import { QrSelfRegistrationComponent } from './pages/patients/qr-self-registration/qr-self-registration.component';
import { EnrollqrComponent } from './pages/external/patients/enrollqr/enrollqr.component';



const routes: Routes = [
  {  
    path: '', 
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'clients', component: ClientComponent},
      { path: 'users', component: UsersComponent},
      { path: 'patients/enroll', component: CreatePatientComponent},
      { path: 'patients/self-registration', component: QrSelfRegistrationComponent},
      { path: 'patients/search', component: SearchComponent},
      { path: 'account/profile', component: ProfileComponent},
    ]    
  },
  { path: 'login', component: LoginComponent},
  { path: 'external/patients/entrollqr/:sessionId', component: EnrollqrComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
