import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { UnitType } from '@models/enums/unit-type';
import { PlanetSocketData } from '@models/interfaces/game/planet/planet-socket-data';
import { FleetData } from '@models/interfaces/game/unit/fleet-data';
import { UnitNumbers } from '@models/interfaces/game/unit/unit-numbers';

import { PlanetSocketService } from '../../../planet/services/planet-socket.service';

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
export class FleetService {
  public fleet$: Observable<FleetData>;

  public currentFleetData$: Observable<FleetData | undefined> = of(undefined);

  constructor(private socketPlanetService: PlanetSocketService) {
    this.fleet$ = this.socketPlanetService.onPlanetListening().pipe(
      map((planet: PlanetSocketData) => {
        return {
          ...planet.fleet,
          fleetArray: planet.fleet.fleetArray.map((unit: UnitNumbers) => {
            return {
              ...unit,
              image: unitImageByTypeMap.get(unit.unitType) || 'structure',
            };
          }),
        };
      }),
      distinctUntilChanged((prev: FleetData, curr: FleetData) => {
        return (
          curr.speed === prev.speed &&
          curr.fuelUsage === prev.fuelUsage &&
          curr.fleetArray.every((currUnitNumber: UnitNumbers) => {
            const previousFleetArray: UnitNumbers | undefined =
              prev.fleetArray.find(
                (prevUnitNumber: UnitNumbers) =>
                  currUnitNumber.unitType === prevUnitNumber.unitType
              );
            return (
              previousFleetArray &&
              previousFleetArray.numberOfUnit === currUnitNumber.numberOfUnit
            );
          })
        );
      })
    );
  }
}
