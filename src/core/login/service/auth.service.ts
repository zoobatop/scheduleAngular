import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Login`, { email, password });
  }

}