import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Socket, SocketIoConfig } from 'ngx-socket-io';

import { SocketEvent } from '../endpoints/socket-event';
import { environment } from './../../../environments/environment';
import { UserData } from './user/user-data';

@Injectable({
  providedIn: 'any',
})
export class SocketService {
  public userData: UserData | undefined;
  private config: SocketIoConfig = {
    url: environment.socketUnauthorizedUrl,
    options: {
      query: {
        token: localStorage.getItem('token'),
        id: localStorage.getItem('token'),
      },
    },
  };

  constructor(private socket: Socket) {
    this.socket = new Socket(this.config);
  }

  public listeningOnEvent<T>(event: SocketEvent): Observable<T> {
    return this.socket.fromEvent<T>(event);
  }

  public sendToEvent(event: SocketEvent, data: any = {}): void {
    this.socket.emit(event, data);
  }

  public setAuthorization(userData: UserData): void {
    this.socket.disconnect();
    if (userData._id) {
      this.config.url = environment.socketUnauthorizedUrl;
      if (this.config.options) {
        this.config.options.path = 'auth';
        this.config.options.query = { token: userData._id, id: userData._id };
      }
    }

    this.socket = new Socket(this.config);
  }
}
