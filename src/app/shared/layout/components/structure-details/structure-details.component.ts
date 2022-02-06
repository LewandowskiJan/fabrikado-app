import { Component, Input } from '@angular/core';

import { Observable, of } from 'rxjs';

import { BuildingSocketData } from '@models/interfaces/game/building/building-socket-data';
import { UnitSocketData } from '@models/interfaces/game/unit/unit-socket-data';

@Component({
  selector: 'app-structure-details',
  templateUrl: './structure-details.component.html',
  styleUrls: ['./structure-details.component.scss'],
})
export class StructureDetailsComponent {
  @Input() public buildingDetails$: Observable<
    BuildingSocketData | UnitSocketData | undefined
  > = of(undefined);
}
