import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Socket } from 'ngx-socket-io';

import { Source } from '../models/source';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  // emit event
  public fetchSources(): void {
    this.socket.emit('fetchSource');
  }

  // listen event
  public onFetchSources(): Observable<Source> {
    return this.socket.fromEvent<Source>('fetchSource');
  }
}
