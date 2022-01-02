import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';
import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';
import { BuildingType } from '@src/app/shared/models/buildingType';

import { Unit, UnitType } from '../../../shipyard/model/unit';

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
  public defenceUnits$: Observable<Unit[]>;

  public currentDefenceUnit$: Observable<Unit | undefined> = of(undefined);

  constructor(private socketPlanetService: PlanetSocketService) {
    this.defenceUnits$ = this.socketPlanetService.onPlanetListening().pipe(
      map((planet: PlanetSocketData) => {
        return planet.defence.map((unit: Unit) => {
          return {
            ...unit,
            image: defenceUnitImageByTypeMap.get(unit.type) || 'structure',
          };
        });
      }),
      distinctUntilChanged((prev: Unit[], curr: Unit[]) => {
        return curr.every((currUnit: Unit) => {
          const previousUnit: Unit | undefined = prev.find(
            (prevUnit: Unit) => currUnit.type === prevUnit.type
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
      map((units: Unit[]) => units.find((unit: Unit) => unit.type === type)),
      shareReplay(1)
    );
  }

  public onUnitCreation(unitType: UnitType | BuildingType | undefined): void {
    unitType && this.socketPlanetService.onCreateUnit(unitType);
  }
}
