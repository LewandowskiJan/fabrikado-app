import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Socket } from 'ngx-socket-io';

import { Building } from '../models/building';
import { BuildingType } from '../models/buildingType';
import { Resource } from '../models/resource';
import { PlanetSocketData } from './../domain/endpoints/planet/planet-data';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  // emit event
  public fetchSources(): void {
    this.socket.emit('fetchSource');
  }

  public preparePlanet(id: string): void {
    this.socket.emit('prepare:planet', id);
    this.socket.emit('read:planet');
  }
  public onFetchPlanet(): Observable<PlanetSocketData> {
    return this.socket.fromEvent<PlanetSocketData>('read:planet');
  }

  // listen event
  public onFetchSources(): Observable<Resource> {
    return this.socket.fromEvent<Resource>('fetchSource');
  }

  public onBuild(buildingType: BuildingType): void {
    this.socket.emit('add:building', buildingType);
    this.onFetchBuildings();
  }

  public onFetchBuildings(): Observable<Building[]> {
    this.socket.emit('fetchBuildings');
    return this.socket
      .fromEvent<Building[]>('fetchBuildings')
      .pipe(tap(console.log));
  }
}
