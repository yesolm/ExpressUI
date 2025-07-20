import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor(private http: HttpClient) { }

  getRegistrationQrCode(clientUuid:string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/patient/registerqr/${clientUuid}`, {
      responseType: 'arraybuffer',
      observe: 'response'
    });
  }
}
