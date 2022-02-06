import { Component, Input } from '@angular/core';
export interface FleetShortcutData {
  name: string;
  size: number;
  fuelLevel: number; // 0/100 %
  favorite: boolean;
  localization: {
    universe: string;
    galactic: string;
    solarSystem: string;
  };
  admiralAvatar: string;
  fleetType: FleetType;
  status: FleetStatus;
  
}

export enum FleetStatus {
  ON_ATTACK,
  ON_MOVE,
  AT_IDLE,
}

export enum FleetType {
  OFFENSIVE,
  DEFENSIVE,
  SCOUT,
  TRADE,
}

@Component({
  selector: 'app-fleet-shortcut',
  templateUrl: './fleet-shortcut.component.html',
  styleUrls: ['./fleet-shortcut.component.scss'],
})
export class FleetShortcutComponent {
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
