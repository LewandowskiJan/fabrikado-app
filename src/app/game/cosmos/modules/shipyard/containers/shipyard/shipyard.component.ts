import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BuildingType } from './../../../../../../shared/models/buildingType';
import { Unit, UnitType } from './../../model/unit';
import { ShipyardService } from './../../services/shipyard.service';

@Component({
  selector: 'app-shipyard',
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.scss'],
})
export class ShipyardComponent {
  public units$: Observable<Unit[] | undefined> = this.shipyardService.units$;

  public currentUnit$: Observable<Unit | undefined> =
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
