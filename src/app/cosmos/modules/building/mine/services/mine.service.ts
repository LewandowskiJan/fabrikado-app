import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BuildingType } from '@src/app/models/buildingType';
import { Resource } from '@src/app/models/resource';
import { SocketPlanetService } from '@src/app/services/socket.service';

import { Mine } from '../model/mine';

@Injectable()
export class MineService {
  public mines$: Observable<Mine[]>;
  public resources$: Observable<Resource> = this.socketPlanetService.onFetchSources();
  public upgradeRestTime$: Observable<Mine[]> =
    this.socketPlanetService.onUpgradeTimeListener();

  public currentMine$: Observable<Mine | undefined> = of(undefined);

  constructor(private socketPlanetService: SocketPlanetService) {
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
