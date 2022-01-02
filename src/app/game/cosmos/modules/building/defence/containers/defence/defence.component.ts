import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BuildingType } from '@src/app/shared/models/buildingType';

import { Unit, UnitType } from '../../../../shipyard/model/unit';
import { DefenceService } from './../../services/defence.service';

@Component({
  selector: 'app-defence',
  templateUrl: './defence.component.html',
  styleUrls: ['./defence.component.scss'],
})
export class DefenceComponent {
  public defenceUnits$: Observable<Unit[] | undefined> =
    this.defenceService.defenceUnits$;

  public currentDefenceUnit$: Observable<Unit | undefined> =
    this.defenceService.currentDefenceUnit$;

  constructor(private defenceService: DefenceService) {}

  public selectDetails(type: UnitType | BuildingType | undefined): void {
    this.defenceService.selectDetails(type);
    this.currentDefenceUnit$ = this.defenceService.currentDefenceUnit$;
  }

  public onCreate(unitType: UnitType | BuildingType | undefined): void {
    unitType && this.defenceService.onUnitCreation(unitType);
  }
}
