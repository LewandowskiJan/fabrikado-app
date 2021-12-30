import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { Coordinates } from 'api/src/game/coordinates/coordinates';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';
import { PlayerEvents } from '@src/app/domain/endpoints/player/player-events.map';
import { ResourceEvents } from '@src/app/domain/endpoints/resource/resource-events.map';
import { SocketService } from '@src/app/domain/services/socket.service';
import { Building } from '@src/app/shared/models/building';
import { BuildingType } from '@src/app/shared/models/buildingType';

import { BuildingEvents } from '@domain/endpoints/buildings/building-events.map';
import { PlanetEvents } from '@domain/endpoints/planet/planet-events.map';

import { PlanetService } from './planet.service';

const buildingImageByTypeMap: Map<BuildingType, string> = new Map([
  [BuildingType.CRYSTAL_MINE, 'structure'],
  [BuildingType.DEUTERIUM_SYNTHESIZER, 'structure2'],
  [BuildingType.METAL_MINE, 'structure4'],
]);

@Injectable({
  providedIn: 'root',
})
export class PlanetSocketService {
  private currentPlanetCoordinates: Coordinates | undefined;

  constructor(
    private socketService: SocketService,
    private planetService: PlanetService
  ) {}

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

  public onFetchPlanet(): void {
    this.socketService
      .listeningOnEvent<PlanetSocketData>(PlanetEvents.PLANET_PREPARE)
      .pipe(
        tap(
          (planetData: PlanetSocketData) =>
            (this.currentPlanetCoordinates = planetData.coordinates)
        )
      )
      .subscribe((planetData: PlanetSocketData) =>
        this.planetService.setupPlanetData(planetData)
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
    this.currentPlanetCoordinates &&
      this.socketService.sendToEvent(BuildingEvents.BUILDING_ADD, {
        buildingType,
        coordinates: this.currentPlanetCoordinates,
      });
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
              image: buildingImageByTypeMap.get(building.type) || 'structure',
            };
          });
        }),
        shareReplay(1)
      );
  }
}
