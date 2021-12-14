import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Socket } from 'ngx-socket-io';

import { Building } from '../models/building';
import { BuildingType } from '../models/buildingType';
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

  public onBuild(buildingType: BuildingType): void {
    this.socket.emit('build', buildingType);
    this.onFetchBuildings();
  }

  public onFetchBuildings(): Observable<Building[]> {
    this.socket.emit('fetchBuildings');
    return this.socket.fromEvent<Building[]>('fetchBuildings');
  }
}
