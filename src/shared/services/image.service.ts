import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private readonly http: HttpClient) { }

  getImageUrl(): Observable<string> {
    return this.http.get<string>('');
  }
}
