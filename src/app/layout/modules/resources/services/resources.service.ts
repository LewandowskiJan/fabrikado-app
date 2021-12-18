import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Resource } from '@src/app/models/resource';

import { SocketService } from './../../../../domain/services/socket.service';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(private socketService: SocketService) {}

  public resourceListener(): Observable<Resource> {
    return this.socketService
      .listeningOnEvent<Resource>('resource:listen')
      .pipe(shareReplay(1));
  }
}
