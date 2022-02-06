import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { BuildingEvents } from '@models/enums/building-events.map';
import { BuildingType } from '@models/enums/building-type';
import { PlanetEvents } from '@models/enums/planet-events.map';
import { PlayerEvents } from '@models/enums/player-events.map';
import { ResourceEvents } from '@models/enums/resource-events.map';
import { UnitEvents } from '@models/enums/unit-events.map';
import { UnitType } from '@models/enums/unit-type';
import { Coordinates } from '@models/interfaces/game/coordinates/coordinates';
import { PlanetSocketData } from '@models/interfaces/game/planet/planet-socket-data';

import { SocketService } from '@domain/socket.service';

import { PlanetService } from './planet.service';

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

  public preparePlanet(id: string | undefined): void {
    if (!id) return;
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
