import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
    return this.http.post<LoginResponse>(`${environment.apiUrl}/Login`, { email, password }, { observe: 'response', withCredentials: true});
  }

  logout(): void {
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
  }

  isAuthenticated(): boolean {
    const token = this.cookieService.get('accessToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getAuthToken(): string | null {
    return this.cookieService.get('accessToken');
  }
}
