import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { BuildingType } from '@src/app/shared/models/buildingType';

import { BuildingEvents } from '@domain/endpoints/buildings/building-events.map';
import { PlanetSocketData } from '@domain/endpoints/planet/planet-data';
import { PlanetEvents } from '@domain/endpoints/planet/planet-events.map';
import { PlayerEvents } from '@domain/endpoints/player/player-events.map';
import { ResourceEvents } from '@domain/endpoints/resource/resource-events.map';
import { UnitEvents } from '@domain/endpoints/unit/unit-events.map';
import { SocketService } from '@domain/services/socket.service';

import { UnitType } from '../../modules/shipyard/model/unit';
import { PlanetService } from './planet.service';

export interface Coordinates {
  galacticIndex: number;
  solarSystemIndex: number;
  planetIndex: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlanetSocketService {
  private currentPlanetCoordinates: Coordinates | undefined;

  constructor(
    private socketService: SocketService,
    private planetService: PlanetService
  ) {}

  public onPlanetListening(): Observable<PlanetSocketData> {
    return this.socketService
      .listeningOnEvent<PlanetSocketData>(PlanetEvents.PLANET_READ)
      .pipe(shareReplay(1));
  }

  public fetchSources(): void {
    this.socketService.sendToEvent(ResourceEvents.RESOURCE_READ);
  }

  public getPlayerData(): Observable<any> {
    return this.socketService.listeningOnEvent<any>(PlayerEvents.PLAYER_READ);
  }

  public preparePlanet(id: string): void {
    this.socketService.sendToEvent(PlanetEvents.PLANET_READ, id);
  }

  public getPlanetsName(): Observable<string[]> {
    this.socketService.sendToEvent(PlanetEvents.PLANET_GET_NAMES);
    return this.socketService.listeningOnEvent<string[]>(
      PlanetEvents.PLANET_GET_NAMES
    );
  }

  public getCurrentPlanet(): Observable<PlanetSocketData> {
    return this.socketService.listeningOnEvent<PlanetSocketData>(
      PlanetEvents.PLANET_READ
    );
  }

  public onFetchPlanet(): void {
    this.socketService
      .listeningOnEvent<PlanetSocketData>(PlanetEvents.PLANET_PREPARE)
      .pipe(
        tap((planetData: PlanetSocketData) => {
          this.currentPlanetCoordinates = planetData.coordinates;
        })
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

  public onBuild(buildingType: BuildingType | UnitType): void {
    this.currentPlanetCoordinates &&
      this.socketService.sendToEvent(BuildingEvents.BUILDING_ADD, {
        buildingType,
        coordinates: this.currentPlanetCoordinates,
      });
  }

  public onCreateUnit(unitType: UnitType | BuildingType): void {
    this.currentPlanetCoordinates &&
      this.socketService.sendToEvent(UnitEvents.UNIT_ADD, {
        unitType,
        planetName: '',
        solarSystem: '',
      });
  }
}
