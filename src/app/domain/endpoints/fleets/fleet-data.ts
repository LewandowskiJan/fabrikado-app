import { UnitType } from '@src/app/game/cosmos/modules/shipyard/model/unit';

export interface UnitNumbers {
  numberOfUnit: number;
  unitType: UnitType;
  image?: string;
}

export interface FleetData {
  speed: number;
  fuelUsage: number;
  fleetArray: UnitNumbers[];
}
