import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../env/environment';
import { registerForm } from '../models/registerForm.interface';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  constructor(private http: HttpClient) { }

  public signUp(form: registerForm): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Register`, {...form});
  }
}
