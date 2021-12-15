import { FleetType } from './fleet-type';

export interface Fleet {
  type: FleetType;
  damage: number;
  defence: number;
  speed: number;
  capacity: number;
}
