import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Socket } from 'ngx-socket-io';

import { environment } from './../../../environments/environment';

const accessToken: string = 'test';

@Injectable({
  providedIn: 'root',
})
export class SocketService extends Socket {
  constructor() {
    super({
      url: environment.socketUrl,
      options: { transports: ['websocket'], query: { token: accessToken } },
    });
  }

  public listeningOnEvent<T>(event: string): Observable<T> {
    return this.fromEvent<T>(event);
  }

  public sendToEvent(event: string, data: any = {}): void {
    this.emit(event, data);
  }
}
