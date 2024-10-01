import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../env/environment';
import { LoginResponse } from '../../login/models/loginResponse.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtHelper: JwtHelperService = new JwtHelperService();
  
  constructor(
    private readonly http: HttpClient
  ) { }
  
  public login(email: string, password: string): Observable<any> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/Login`, { email, password })
    .pipe(
      tap(res => {
        if (res.auth) {
          this.saveStorage(res)
        }
    }))
  };

  saveStorage(response: any): void {
    const auth: string = response.auth ? "true" : "false"
    
    localStorage.setItem('auth', auth);
    localStorage.setItem('id', response.id.toString());
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
  }

  logout(): boolean {
    localStorage.removeItem('auth');
    localStorage.removeItem('id');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    return true;
  };

  isAuthenticated() {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}