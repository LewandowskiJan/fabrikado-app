import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Unit, UnitType } from '@src/app/game/cosmos/modules/shipyard/model/unit';
import { BuildingType } from '@src/app/shared/models/buildingType';

import { Building } from './../../../models/building';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
})
export class StructureComponent {
  @Input() public building: Building | Unit | undefined;
  @Output() public selectEmitter: EventEmitter<
    BuildingType | UnitType | undefined
  > = new EventEmitter();

  public selectStructure(): void {
    this.selectEmitter.emit(this.building?.type);
  }
}
