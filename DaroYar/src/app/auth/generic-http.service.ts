import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class GenericHttpService {
  constructor(private httpClient: HttpClient) {}
  authService=inject(AuthService)
  appRoot = environment.serverUrl;
  get<T>(url: string, headers?: any): Observable<Object> {
    if (headers == null) {
      headers = new HttpHeaders({ 'Authorization': this.authService.getTokenLocalStorage() as string });
    }
    return this.httpClient.get(this.appRoot + url, { headers });
  }

  delete(url: string, body?: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: body,
    };
    return this.httpClient.delete(this.appRoot + url, httpOptions);
  }
  post<T>(url: string, data: any, headers?: any): Observable<Object> {
    if (headers == null) {
      headers = new HttpHeaders({ 'Authorization': this.authService.getTokenLocalStorage() as string });
    }
    if (headers == 'undefined') {
      return this.httpClient.post(this.appRoot + url, data);
    } else {
      return this.httpClient.post(this.appRoot + url, data, { headers });
    }
  }

  put<T>(url: string, body: any = null, headers?: any): Observable<Object> {
    if (headers == null) {
      headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    if (headers == 'undefined') {
      return this.httpClient.put(this.appRoot + url, body);
    } else {
      return this.httpClient.put(this.appRoot + url, body, { headers });
    }
  }
}
