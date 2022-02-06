import { Component, Input } from '@angular/core';

import { UnitSocketData } from '@models/interfaces/game/unit/unit-socket-data';

@Component({
  selector: 'app-defence-details',
  templateUrl: './defence-details.component.html',
  styleUrls: ['./defence-details.component.scss'],
})
export class DefenceDetailsComponent {
  @Input() currentDefenceUnit: UnitSocketData | undefined;
}
