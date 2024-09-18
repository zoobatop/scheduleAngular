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

  // private saveStorage(itens: any): void {
  //   let consultantId = itens.data.id;
  //   let dataLogin    = Date.now().toString()

  //   localStorage.setItem('consultantId', consultantId)
  //   localStorage.setItem('dataLogin',    dataLogin)
  // }
}