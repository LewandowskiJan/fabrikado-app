import { Component, Input } from '@angular/core';

import {
  FleetShortcutData,
  FleetStatus,
  FleetType,
} from '../fleet-shortcut/fleet-shortcut.component';

@Component({
  selector: 'app-fleet-admiral-avatar',
  templateUrl: './fleet-admiral-avatar.component.html',
  styleUrls: ['./fleet-admiral-avatar.component.scss'],
})
export class FleetAdmiralAvatarComponent {
  @Input() public FleetShortcutData: FleetShortcutData = {
    name: 'test1',
    size: 3,
    fuelLevel: 50, // 0/100 %
    favorite: false,
    localization: {
      universe: 'U-1',
      galactic: 'G-1',
      solarSystem: 'S-1',
    },
    admiralAvatar: 'test1',
    fleetType: FleetType.OFFENSIVE,
    status: FleetStatus.AT_IDLE,
  };
}
