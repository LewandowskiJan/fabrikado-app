import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  public listeningOnEvent<T>(event: string): Observable<T> {
    return this.socket.fromEvent<T>(event);
  }

  public sendToEvent(event: string, data: any): void {
    this.socket.emit(event, data);
  }
}
