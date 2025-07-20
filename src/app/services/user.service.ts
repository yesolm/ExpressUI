import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, ) { }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/user`);
  }

  getUserProfile(userId: any) : Observable<any> {
    return this.http.get(`${environment.apiUrl}/user/profile/${userId}`);
  }
  
  updateUser(user: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/user`, user);
  }

}


