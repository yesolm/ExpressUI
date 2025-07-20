import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../models/user';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MiniProfile } from '../models/mini.profile';

@Injectable()
export class AuthService {
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) { }

  login(user: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/account/login`, user);
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
 
  setUser(token:any){localStorage.setItem('access_token',token);}
  isLoggedIn() { return localStorage.getItem('access_token') != null;  }
  getToken(){return localStorage.getItem('access_token')}
  getUserName() {return localStorage.getItem('name')} 
  getUserId() { return this.jwtHelper.decodeToken(localStorage.getItem('access_token')!)["id"];}

  getMiniProfile(){

    var token = this.jwtHelper.decodeToken(localStorage.getItem('access_token')!);

    if(token != null){   
      
      return {
      firstName: token["firstname"],
      lastName: token["lastname"],
      email: token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
         };
    }
    return null;
  }
}
