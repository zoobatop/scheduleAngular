import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getProfile(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/User/Profile/${id}`);
  }

}
