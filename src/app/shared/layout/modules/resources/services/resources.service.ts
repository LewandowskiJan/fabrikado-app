import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ResourceEvents } from '@src/app/domain/endpoints/resource/resource-events.map';
import { SocketService } from '@src/app/domain/services/socket.service';
import { Resource } from '@src/app/shared/models/resource';

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
