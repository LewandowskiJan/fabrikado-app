import { Component, Input } from '@angular/core';

import { FleetStatus } from '@models/enums/fleet-status';
import { FleetType } from '@models/enums/fleet-type';
import { FleetShortcutData } from '@models/interfaces/game/unit/fleet-shortcut-data';

@Component({
  selector: 'app-fleet-shortcut',
  templateUrl: './fleet-shortcut.component.html',
  styleUrls: ['./fleet-shortcut.component.scss'],
})
export class FleetShortcutComponent {
  @Input() public fleetShortcutData: FleetShortcutData = {
    name: 'test1',
    size: 3,
    fuelLevel: 50, // 0/100 %
    favorite: false,
    localization: {
      universeIndex: 'U-1',
      galacticIndex: 'G-1',
      solarSystemIndex: 'S-1',
    },
    admiralAvatar: 'test1',
    fleetType: FleetType.OFFENSIVE,
    status: FleetStatus.AT_IDLE,
  };
}
