import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';

import { PlanetSocketService } from '../../../planet/services/planet-socket.service';
import { UnitType } from '../../shipyard/model/unit';
import { BuildingType } from './../../../../../shared/models/buildingType';
import { Technology } from './../model/technology';

const buildingImageByTypeMap: Map<BuildingType, string> = new Map([
  [BuildingType.COMBUSTION_DRIVE, 'structure3'],
  [BuildingType.IMPULSE_DRIVE, 'structure3'],
  [BuildingType.ARMOUR_TECHNOLOGY, 'structure3'],
  [BuildingType.ION_TECHNOLOGY, 'structure3'],
  [BuildingType.HYPERSPACE_TECHNOLOGY, 'structure3'],
  [BuildingType.HYPERSPACE_DRIVE, 'structure3'],
  [BuildingType.LASER_TECHNOLOGY, 'structure5'],
  [BuildingType.PLASMA_TECHNOLOGY, 'structure5'],
  [BuildingType.GRAVITON_TECHNOLOGY, 'structure5'],
  [BuildingType.SHIELDING_TECHNOLOGY, 'structure2'],
  [BuildingType.ESPIONAGE_TECHNOLOGY, 'structure2'],
  [BuildingType.COMPUTER_TECHNOLOGY, 'structure2'],
  [BuildingType.WEAPON_TECHNOLOGY, 'structure4'],
  [BuildingType.ENERGY_TECHNOLOGY, 'structure4'],
  [BuildingType.INTERGALACTIC_RESEARCH_NETWORK, 'structure4'],
  [BuildingType.ASTROPHYSICS, 'structure4'],
]);

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  public mines$: Observable<Technology[]>;

  public currentTechnology$: Observable<Technology | undefined> = of(undefined);

  constructor(private socketPlanetService: PlanetSocketService) {
    this.mines$ = this.socketPlanetService.onPlanetListening().pipe(
      map((planet: PlanetSocketData) => {
        return planet.technologies.map((building: Technology) => {
          return {
            ...building,
            image: buildingImageByTypeMap.get(building.type) || 'structure',
          };
        });
      }),
      distinctUntilChanged((prev: Technology[], curr: Technology[]) => {
        return curr.every((currTechnology: Technology) => {
          const previousTechnology: Technology | undefined = prev.find(
            (prevTechnology: Technology) =>
              currTechnology.type === prevTechnology.type
          );
          return (
            previousTechnology &&
            previousTechnology.upgradingTimeLeft ===
              currTechnology.upgradingTimeLeft
          );
        });
      })
    );
  }

  public selectDetails(type: BuildingType | UnitType | undefined): void {
    this.currentTechnology$ = this.mines$.pipe(
      map((mines: Technology[]) =>
        mines.find((mine: Technology) => mine.type === type)
      ),
      shareReplay(1)
    );
  }

  public onBuild(buildingType: BuildingType | UnitType | undefined): void {
    buildingType && this.socketPlanetService.onBuild(buildingType);
  }
}
