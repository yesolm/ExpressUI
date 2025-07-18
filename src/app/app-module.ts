import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Sidebar } from './layout/sidebar/sidebar';
import { MainLayout } from './layout/main-layout/main-layout';
import { AccountLayout } from './layout/account-layout/account-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/account/login/login';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Sidebar,
    MainLayout,
    AccountLayout,
    Dashboard,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
