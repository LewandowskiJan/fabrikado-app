import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { SocketService } from '../domain/services/socket.service';
import { Building } from '../models/building';
import { BuildingType } from '../models/buildingType';
import { Resource } from '../models/resource';
import { PlanetSocketData } from './../domain/endpoints/planet/planet-data';

@Injectable({
  providedIn: 'root',
})
export class SocketPlanetService {
  constructor(private socketService: SocketService) {}

  // emit event
  public fetchSources(): void {
    this.socketService.sendToEvent('fetchSource');
  }

  public preparePlanet(id: string): void {
    this.socketService.sendToEvent('prepare:planet', id);
    this.socketService.sendToEvent('read:planet');
  }
  public onFetchPlanet(): Observable<PlanetSocketData> {
    return this.socketService.listeningOnEvent<PlanetSocketData>('read:planet');
  }

  public planetErrorListener(): Observable<string> {
    return this.socketService.listeningOnEvent<string>('error:planet');
  }

  public onFetchSources(): Observable<Resource> {
    return this.socketService.listeningOnEvent<Resource>('fetchSource');
  }

  public onBuild(buildingType: BuildingType): void {
    this.socketService.sendToEvent('add:building', buildingType);
    this.onFetchBuildings();
  }

  public onFetchBuildings(): Observable<Building[]> {
    this.socketService.sendToEvent('fetchBuildings');
    return this.socketService.listeningOnEvent<Building[]>('fetchBuildings');
  }
}
