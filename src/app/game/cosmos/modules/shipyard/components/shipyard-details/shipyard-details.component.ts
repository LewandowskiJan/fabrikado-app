import { Component, Input } from '@angular/core';

import { UnitSocketData } from '@models/interfaces/game/unit/unit-socket-data';

@Component({
  selector: 'app-shipyard-details',
  templateUrl: './shipyard-details.component.html',
  styleUrls: ['./shipyard-details.component.scss'],
})
export class ShipyardDetailsComponent {
  @Input() unit: UnitSocketData | undefined;
}
