import { UnitType } from './../../../../game/modules/units/factory/unit.abstract';

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
