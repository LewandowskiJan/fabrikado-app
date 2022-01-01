import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';

import { PlanetSocketService } from '../../../planet/services/planet-socket.service';
import { Unit, UnitType } from '../model/unit';
import { BuildingType } from './../../../../../shared/models/buildingType';

const unitImageByTypeMap: Map<UnitType, string> = new Map([
  [UnitType.SMALL_CARGO_SHIP, 'structure2'],
  [UnitType.LARGE_CARGO_SHIP, 'structure2'],
  [UnitType.LIGHT_FIGHTER, 'structure3'],
  [UnitType.HEAVY_FIGHTER, 'structure3'],
  [UnitType.CRUISER, 'structure3'],
  [UnitType.BATTLESHIP, 'structure3'],
  [UnitType.BATTLE_CRUISER, 'structure3'],
  [UnitType.BOMBER, 'structure3'],
  [UnitType.DESTROYER, 'structure4'],
  [UnitType.DEATH_STAR, 'structure4'],
  [UnitType.REAPER, 'structure4'],
  [UnitType.PATHFINDER, 'structure4'],
  [UnitType.RECYCLER, 'structure2'],
  [UnitType.ESPIONAGE_PROBE, 'structure2'],
  [UnitType.SOLAR_SATELLITE, 'structure2'],
  [UnitType.COLONY_SHIP, 'structure2'],
  [UnitType.CRAWLER, 'structure2'],
]);

@Injectable({
  providedIn: 'root',
})
export class ShipyardService {
  public units$: Observable<Unit[]>;

  public currentUnit$: Observable<Unit | undefined> = of(undefined);

  constructor(private socketPlanetService: PlanetSocketService) {
    this.units$ = this.socketPlanetService.onPlanetListening().pipe(
      map((planet: PlanetSocketData) => {
        return planet.units.map((unit: Unit) => {
          return {
            ...unit,
            image: unitImageByTypeMap.get(unit.type) || 'structure',
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
    this.currentUnit$ = this.units$.pipe(
      map((units: Unit[]) => units.find((unit: Unit) => unit.type === type)),
      shareReplay(1)
    );
  }

  public onUnitCreation(unitType: UnitType | BuildingType | undefined): void {
    unitType && this.socketPlanetService.onCreateUnit(unitType);
  }
}
