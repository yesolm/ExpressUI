import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { AccountLayout } from './layout/account-layout/account-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/account/login/login';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Dashboard}     
    ],
  },
  {
    path: '',
    component: AccountLayout,
    children: [
      // {
      //   path: 'login',
      //   loadChildren: () =>
      //     import('./pages/login/login.module').then(m => m.LoginModule),
      // },
      // {
      //   path: 'register',
      //   loadChildren: () =>
      //     import('./pages/register/register.module').then(m => m.RegisterModule),
      // },
      // add more account-layout routes here
    ],
  },
  { path: 'login', component: Login},
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
