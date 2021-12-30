import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';
import { BuildingType } from '@src/app/shared/models/buildingType';

import { Mine } from '../model/mine';
import { PlanetSocketData } from './../../../../../../domain/endpoints/planet/planet-data';

const buildingImageByTypeMap: Map<BuildingType, string> = new Map([
  [BuildingType.CRYSTAL_MINE, 'structure'],
  [BuildingType.DEUTERIUM_SYNTHESIZER, 'structure2'],
  [BuildingType.METAL_MINE, 'structure4'],
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
      })
    );
  }

  public selectDetails(type: BuildingType | undefined): void {
    this.currentMine$ = this.mines$.pipe(
      map((mines: Mine[]) => mines.find((mine: Mine) => mine.type === type)),
      shareReplay(1)
    );
  }

  public onBuild(buildingType: BuildingType | undefined): void {
    buildingType && this.socketPlanetService.onBuild(buildingType);
  }
}
