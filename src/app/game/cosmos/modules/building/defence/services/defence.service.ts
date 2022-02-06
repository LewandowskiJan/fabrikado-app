import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

import { BuildingType } from '@models/enums/building-type';
import { UnitType } from '@models/enums/unit-type';
import { PlanetSocketData } from '@models/interfaces/game/planet/planet-socket-data';
import { UnitSocketData } from '@models/interfaces/game/unit/unit-socket-data';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';

const defenceUnitImageByTypeMap: Map<UnitType, string> = new Map([
  [UnitType.ROCKET_LAUNCHER, 'structure'],
  [UnitType.LIGHT_LASER, 'structure2'],
  [UnitType.HEAVY_LASER, 'structure2'],
  [UnitType.ION_CANNON, 'structure2'],
  [UnitType.GAUSS_CANNON, 'structure2'],
  [UnitType.PLASMA_CANNON, 'structure2'],
  [UnitType.SMALL_SHIELD_DOME, 'structure3'],
  [UnitType.LARGE_SHIELD_DOME, 'structure3'],
  [UnitType.ANTI_BALLISTIC_MISSILE, 'structure3'],
]);

@Injectable({
  providedIn: 'root',
})
export class DefenceService {
  public defenceUnits$: Observable<UnitSocketData[]>;

  public currentDefenceUnit$: Observable<UnitSocketData | undefined> = of(undefined);

  constructor(private socketPlanetService: PlanetSocketService) {
    this.defenceUnits$ = this.socketPlanetService.onPlanetListening().pipe(
      map((planet: PlanetSocketData) => {
        return planet.defence.map((unit: UnitSocketData) => {
          return {
            ...unit,
            image: defenceUnitImageByTypeMap.get(unit.type) || 'structure',
          };
        });
      }),
      distinctUntilChanged((prev: UnitSocketData[], curr: UnitSocketData[]) => {
        return curr.every((currUnit: UnitSocketData) => {
          const previousUnit: UnitSocketData | undefined = prev.find(
            (prevUnit: UnitSocketData) => currUnit.type === prevUnit.type
          );
          return (
            previousUnit &&
            previousUnit.creatingTimeLeft === currUnit.creatingTimeLeft
          );
        });
      })
    );
  }

  public selectDetails(type: UnitType | BuildingType | undefined): void {
    this.currentDefenceUnit$ = this.defenceUnits$.pipe(
      map((units: UnitSocketData[]) => units.find((unit: UnitSocketData) => unit.type === type)),
      shareReplay(1)
    );
  }

  public onUnitCreation(unitType: UnitType | BuildingType | undefined): void {
    unitType && this.socketPlanetService.onCreateUnit(unitType);
  }
}
