import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';
import { BuildingType } from '@src/app/shared/models/buildingType';

import { UnitType } from '../../../shipyard/model/unit';
import { Mine } from '../model/mine';
import { PlanetSocketData } from './../../../../../../domain/endpoints/planet/planet-data';

const buildingImageByTypeMap: Map<BuildingType, string> = new Map([
  [BuildingType.CRYSTAL_MINE, 'structure3'],
  [BuildingType.DEUTERIUM_SYNTHESIZER, 'structure3'],
  [BuildingType.METAL_MINE, 'structure3'],
  [BuildingType.CRYSTAL_MINE, 'structure3'],
  [BuildingType.DEUTERIUM_SYNTHESIZER, 'structure3'],
  [BuildingType.METAL_MINE, 'structure3'],
  [BuildingType.FUSION_REACTOR, 'structure5'],
  [BuildingType.SOLAR_PLANT, 'structure5'],
  [BuildingType.SOLAR_SATELLITE, 'structure5'],
  [BuildingType.CRYSTAL_STORAGE, 'structure2'],
  [BuildingType.METAL_STORAGE, 'structure2'],
  [BuildingType.DEUTERIUM_TANK, 'structure2'],
  [BuildingType.ROBOTICS_FACTORY, 'structure4'],
  [BuildingType.SHIPYARD, 'structure4'],
  [BuildingType.RESEARCH_LAB, 'structure4'],
  [BuildingType.ALLIANCE_DEPOT, 'structure4'],
  [BuildingType.MISSILE_SILO, 'structure4'],
  [BuildingType.NANITE_FACTORY, 'structure4'],
  [BuildingType.TERRAFORMER, 'structure4'],
]);

@Injectable()
export class MineService {
  public mines$: Observable<Mine[]>;

  public currentMine$: Observable<Mine | undefined> = of(undefined);

  constructor(private socketPlanetService: PlanetSocketService) {
    this.mines$ = this.socketPlanetService.onPlanetListening().pipe(
      map((planet: PlanetSocketData) => {
        return planet.buildings.map((building: Mine) => {
          return {
            ...building,
            image: buildingImageByTypeMap.get(building.type) || 'structure',
          };
        });
      }),
      distinctUntilChanged((prev: Mine[], curr: Mine[]) => {
        return curr.every((currMine: Mine) => {
          const previousMine: Mine | undefined = prev.find(
            (prevMine: Mine) => currMine.type === prevMine.type
          );
          return (
            previousMine &&
            previousMine.upgradingTimeLeft === currMine.upgradingTimeLeft
          );
        });
      })
    );
  }

  public selectDetails(type: BuildingType | UnitType | undefined): void {
    this.currentMine$ = this.mines$.pipe(
      map((mines: Mine[]) => mines.find((mine: Mine) => mine.type === type)),
      shareReplay(1)
    );
  }

  public onBuild(buildingType: BuildingType | UnitType | undefined): void {
    buildingType && this.socketPlanetService.onBuild(buildingType);
  }
}
