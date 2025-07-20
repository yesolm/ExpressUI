import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  register(patient: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/patient/registerqr`, patient);
  }
}
