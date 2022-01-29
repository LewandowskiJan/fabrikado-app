import { UnitType } from './../../../../game/utils/factories/unit-factory/unit.abstract';

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
