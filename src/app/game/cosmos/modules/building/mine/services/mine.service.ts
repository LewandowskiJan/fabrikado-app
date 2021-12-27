import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';
import { BuildingType } from '@src/app/shared/models/buildingType';

import { Mine } from '../model/mine';

@Injectable()
export class MineService {
  public mines$: Observable<Mine[]>;
  public upgradeRestTime$: Observable<Mine[]> =
    this.socketPlanetService.onUpgradeTimeListener();

  public currentMine$: Observable<Mine | undefined> = of(undefined);

  constructor(private socketPlanetService: PlanetSocketService) {
    this.mines$ = this.socketPlanetService.onFetchBuildings();
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
