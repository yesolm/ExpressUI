import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule ,} from '@angular/platform-browser';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/account/login/login.component';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientComponent } from './pages/client/client.component';
import { CreatePatientComponent } from './pages/patients/create-patient/create-patient.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { SearchComponent } from './pages/patients/search/search.component';
import { EnrollqrComponent } from './pages/external/patients/enrollqr/enrollqr.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        MainLayoutComponent,
        DashboardComponent,
        LoginComponent,
        AccountLayoutComponent,
        ClientComponent,
        CreatePatientComponent,
        UsersComponent,
        ProfileComponent,
        SearchComponent,
        EnrollqrComponent
    ],
    bootstrap: [AppComponent], imports: [AppRoutingModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        NgxSpinnerModule.forRoot(),
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('access_token');
                },
                allowedDomains: ['localhost:4200'],
                disallowedRoutes: ['localhost:4200/api/auth']
            }
        }),
        SweetAlert2Module.forRoot()], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SpinnerInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        { provide: Window, useValue: window },
        AuthService,
        AuthGuard,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
