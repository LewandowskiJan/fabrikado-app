import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ResourceEvents } from '@src/app/domain/endpoints/resource/resource-events.map';
import { Resource } from '@src/app/models/resource';

import { SocketService } from './../../../../domain/services/socket.service';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(private socketService: SocketService) {}

  public resourceListener(): Observable<Resource> {
    return this.socketService
      .listeningOnEvent<Resource>(ResourceEvents.RESOURCE_READ)
      .pipe(shareReplay(1));
  }
}
