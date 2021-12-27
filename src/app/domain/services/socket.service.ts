import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Socket, SocketIoConfig } from 'ngx-socket-io';

import { environment } from '@src/environments/environment';

import { SocketEvent } from '../endpoints/socket-event';
@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public socket: Socket;

  private config: SocketIoConfig = {
    url: environment.socketUnauthorizedUrl,
    options: {
      query: {
        token: localStorage.getItem('token'),
        id: localStorage.getItem('token'),
      },
    },
  };

  constructor() {
    this.socket = new Socket(this.config);
  }

  public listeningOnEvent<T>(event: SocketEvent): Observable<T> {
    return this.socket.fromEvent<T>(event);
  }

  public sendToEvent(event: SocketEvent, data: any = {}): void {
    this.socket.emit(event, data);
  }

  public reconnect(config: Partial<SocketIoConfig>): void {
    this.socket.disconnect();
    this.socket = new Socket({ ...this.config, ...config });
  }
}
