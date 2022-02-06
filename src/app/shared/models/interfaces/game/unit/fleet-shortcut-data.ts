import { FleetStatus } from '@models/enums/fleet-status';
import { FleetType } from '@models/enums/fleet-type';

import { Coordinates } from '../coordinates/coordinates';

export interface FleetShortcutData {
  name: string;
  size: number;
  fuelLevel: number; // 0/100 %
  favorite: boolean;
  localization: Coordinates;
  admiralAvatar: string;
  fleetType: FleetType;
  status: FleetStatus;
}
