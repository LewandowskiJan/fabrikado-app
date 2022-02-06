import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BuildingType } from '@models/enums/building-type';
import { UnitType } from '@models/enums/unit-type';
import { BuildingSocketData } from '@models/interfaces/game/building/building-socket-data';
import { UnitSocketData } from '@models/interfaces/game/unit/unit-socket-data';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
})
export class StructureComponent {
  @Input() public building: BuildingSocketData | UnitSocketData | undefined;
  @Output() public selectEmitter: EventEmitter<
    BuildingType | UnitType | undefined
  > = new EventEmitter();

  public selectStructure(): void {
    this.selectEmitter.emit(this.building?.type);
  }
}
