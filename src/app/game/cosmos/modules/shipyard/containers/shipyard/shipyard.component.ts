import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BuildingType } from '@models/enums/building-type';
import { UnitType } from '@models/enums/unit-type';
import { UnitSocketData } from '@models/interfaces/game/unit/unit-socket-data';

import { ShipyardService } from './../../services/shipyard.service';

@Component({
  selector: 'app-shipyard',
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.scss'],
})
export class ShipyardComponent {
  public units$: Observable<UnitSocketData[] | undefined> =
    this.shipyardService.units$;

  public currentUnit$: Observable<UnitSocketData | undefined> =
    this.shipyardService.currentUnit$;

  constructor(private shipyardService: ShipyardService) {}

  public selectDetails(type: UnitType | BuildingType | undefined): void {
    this.shipyardService.selectDetails(type);
    this.currentUnit$ = this.shipyardService.currentUnit$;
  }

  public onCreate(unitType: UnitType | BuildingType | undefined): void {
    unitType && this.shipyardService.onUnitCreation(unitType);
  }
}
