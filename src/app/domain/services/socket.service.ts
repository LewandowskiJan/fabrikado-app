import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Socket } from 'ngx-socket-io';

import { SocketEvent } from '../endpoints/socket-event';
import { environment } from './../../../environments/environment';
import { RestService } from './rest.service';

const accessToken: string = 'test';

@Injectable({
  providedIn: 'root',
})
export class SocketService extends Socket {
  constructor(private restService: RestService) {
    super({
      url: environment.socketUrl,
      options: {
        transports: ['websocket'],
        query: {
          token: accessToken,
          id: restService.userData?.id ?? null,
        },
      },
    });
  }

  public listeningOnEvent<T>(event: SocketEvent): Observable<T> {
    return this.fromEvent<T>(event);
  }

  public sendToEvent(event: SocketEvent, data: any = {}): void {
    this.emit(event, data);
  }
}
