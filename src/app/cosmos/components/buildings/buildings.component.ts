import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BuildingType } from 'src/app/models/buildingType';
import { SocketPlanetService } from 'src/app/services/socket.service';

import { Building } from '@src/app/models/building';

import { Structure } from '../../models/structure';
import { BuildingsService } from '../../services/buildings.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent {
  public structures$: Observable<Structure[]> = this.buildingsService.structures$;
  public currentDetails: Structure | undefined;
  public buildings$: Observable<Building[]>;

  constructor(
    private buildingsService: BuildingsService,
    private socketService: SocketPlanetService
  ) {
    this.buildings$ = this.socketService.onFetchBuildings();
  }

  public selectDetails(details: Structure): void {
    this.currentDetails = details;
  }

  public onBuild(): void {
    this.socketService.onBuild(BuildingType.METAL_MINE);
  }
}
