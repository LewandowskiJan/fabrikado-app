import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BuildingEvents } from '@domain/endpoints/buildings/building-events.map';
import { PlanetEvents } from '@domain/endpoints/planet/planet-events.map';

import { PlayerEvents } from '../domain/endpoints/player/player-events.map';
import { ResourceEvents } from '../domain/endpoints/resource/resource-events.map';
import { SocketService } from '../domain/services/socket.service';
import { Building } from '../shared/models/building';
import { BuildingType } from '../shared/models/buildingType';
import { PlanetSocketData } from './../domain/endpoints/planet/planet-data';

const buildingImageByTypeMap: Map<BuildingType, string> = new Map([
  [BuildingType.CRYSTAL_MINE, 'structure'],
  [BuildingType.DEUTERIUM_SYNTHESIZER, 'structure2'],
  [BuildingType.METAL_MINE, 'structure4'],
]);

@Injectable({
  providedIn: 'any',
})
export class SocketPlanetService {
  constructor(private socketService: SocketService) {}

  public fetchSources(): void {
    this.socketService.sendToEvent(ResourceEvents.RESOURCE_READ);
  }

  public getPlayerData(): Observable<any> {
    return this.socketService.listeningOnEvent<any>(PlayerEvents.PLAYER_READ);
  }

  public preparePlanet(id: string): void {
    this.socketService.sendToEvent(PlanetEvents.PLANET_PREPARE, id);
  }

  public getPlanetsName(): Observable<string[]> {
    return this.socketService.listeningOnEvent<string[]>(
      PlanetEvents.PLANET_GET_NAMES
    );
  }

  public onFetchPlanet(): Observable<PlanetSocketData> {
    return this.socketService.listeningOnEvent<PlanetSocketData>(
      PlanetEvents.PLANET_PREPARE
    );
  }

  public planetErrorListener(): Observable<string> {
    return this.socketService.listeningOnEvent<string>(
      PlanetEvents.PLANET_ERROR
    );
  }

  public onUpgradeTimeListener(): Observable<Building[]> {
    return this.socketService
      .listeningOnEvent<Building[]>(BuildingEvents.BUILDING_UPDATE)
      .pipe(
        map((buildings: Building[]) => {
          return buildings.map((building: Building) => {
            return {
              ...building,
              image: buildingImageByTypeMap.get(building.type),
            };
          });
        }),
        shareReplay(1)
      );
  }

  public onBuild(buildingType: BuildingType): void {
    this.socketService.sendToEvent(BuildingEvents.BUILDING_ADD, buildingType);
    this.onFetchBuildings();
  }

  public onFetchBuildings(): Observable<Building[]> {
    this.socketService.sendToEvent(BuildingEvents.BUILDING_READ);
    return this.socketService
      .listeningOnEvent<Building[]>(BuildingEvents.BUILDING_READ)
      .pipe(
        map((buildings: Building[]) => {
          return buildings.map((building: Building) => {
            return {
              ...building,
              image: buildingImageByTypeMap.get(building.type),
            };
          });
        }),
        shareReplay(1)
      );
  }
}
