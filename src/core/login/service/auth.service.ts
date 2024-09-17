import { environment } from '../../../../env/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  public async login(username: string, password: string) {
    try {
      let response = this.http.post(`${environment.apiUrl}/Login`, { username, password })
      this.saveStorage(response)
      return response
    } catch(error) {

    }
  };

  saveStorage(itens: any): void {
    let consultantId = itens.data.id;
    let dataLogin    = Date.now().toString()

    localStorage.setItem('consultantId', consultantId)
    localStorage.setItem('dataLogin',    dataLogin)
  }
}
