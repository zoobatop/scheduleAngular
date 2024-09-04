import { environment } from '../../../../env/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  public login(username: string, password: string): Observable<any> {
    let response = this.http.post(`${environment.apiUrl}/Login`, { username, password })
    return response
  }
}
