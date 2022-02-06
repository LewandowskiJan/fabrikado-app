import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RequestOptions } from '@models/interfaces/domain/request-options';
import { UserData } from '@models/interfaces/domain/user-data';

const defaultHeaders: { [key: string]: string } = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4200',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
};

@Injectable({
  providedIn: 'root',
})
export class RestService {
  public userData: UserData | undefined;
  private baseUrl: string = 'http://localhost:3000/api';

  private defaultRequestOptions: RequestOptions = {
    headers: { ...defaultHeaders },
  };

  constructor(private http: HttpClient) {}

  public request<T>(options: Partial<HttpRequest<T>>): Observable<T> {
    let headers: any;
    if (this.userData) {
      headers = {
        ...this.defaultRequestOptions.headers,
        ['user-id']: this.userData._id,
      };
    }
    return this.http.get<T>(`${this.baseUrl}/${options.url}`, {
      headers,
      ...options.params,
    });
  }

  public requestPost<T>(options: Partial<HttpRequest<T>>): Observable<T> {
    const defaultOptions: any = {
      ...options,
      url: options.url || '',
      body: options.body || {},
    };

    return this.http.post<T>(
      `${this.baseUrl}/${defaultOptions.url}`,
      defaultOptions.body,
      { ...options.params }
    );
  }

  public setUserData(user: UserData): void {
    if (user._id) localStorage.setItem('token', user._id);
    this.userData = user;
  }
}
