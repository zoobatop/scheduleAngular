import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../env/environment';
import { LoginResponse } from '../../login/models/loginResponse.interface';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtHelper: JwtHelperService = new JwtHelperService();
  
  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) { }
  
  public login(email: string, password: string): Observable<any> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/Login`, { email, password })
  }

  logout(): void {}

  isAuthenticated(): boolean {
    // const token = this.cookieService.get('access_token');
    // return !this.jwtHelper.isTokenExpired(token);
    return true
  }

  getAuthToken(): string | null {
    // return this.cookieService.get('access_token');
    return "socorro";
  }
}
