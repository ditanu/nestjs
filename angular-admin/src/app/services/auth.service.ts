import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data, {
      withCredentials: true
    });
  }

  register(data: any): Observable<any> {
    return this.http.post(`${environment.api}/register`, data);
  }

  user(): Observable<any> {
    return this.http.get(`${environment.api}/user`, {
      withCredentials: true
    })
  }
}