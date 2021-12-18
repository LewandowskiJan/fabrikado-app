import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { BuildingType } from 'src/app/models/buildingType';
import { SocketPlanetService } from 'src/app/services/socket.service';

import { Building } from '@src/app/models/building';
import { Resource } from '@src/app/models/resource';

import { Structure } from '../../models/structure';
import { BuildingsService } from '../../services/buildings.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent {
  public structures$: Observable<Structure[]> =
    this.buildingsService.structures$;
  public currentDetails: Structure | undefined;
  public buildings$: Observable<Building[]>;
  public resources$: Observable<Resource> = this.socketService.onFetchSources();
  public upgradeRestTime$: Observable<Building[]> =
    this.socketService.onUpgradeTimeListener();

  public currentBuilding$: Observable<Building | undefined> = of(undefined);

  constructor(
    private buildingsService: BuildingsService,
    private socketService: SocketPlanetService
  ) {
    this.buildings$ = this.socketService.onFetchBuildings();
  }

  public selectDetails(type: BuildingType | undefined): void {
    this.currentBuilding$ = this.buildings$.pipe(
      map((buildings: Building[]) =>
        buildings.find((building: Building) => building.type === type)
      ),
      shareReplay(1)
    );
  }

  public onBuild(buildingType: BuildingType | undefined): void {
    buildingType && this.socketService.onBuild(buildingType);
  }
}
