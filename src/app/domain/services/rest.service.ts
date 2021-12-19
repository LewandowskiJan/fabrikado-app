import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UserData } from './user/user.service';

export interface RequestOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  withCredentials?: boolean;
}

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
    headers: new HttpHeaders({ ...defaultHeaders }),
  };

  constructor(private http: HttpClient) {}

  public request<T>(options: Partial<HttpRequest<T>>): Observable<T> {
    let headers: any;
    if (this.userData) {
      headers = {
        ...this.defaultRequestOptions.headers,
        ['user-id']: this.userData.id,
      };
    }
    return this.http.get<T>(`${this.baseUrl}/${options.url}`, {
      headers,
      ...options.params,
    });
  }

  public setUserData(user: UserData): void {
    this.userData = user;
  }
}
