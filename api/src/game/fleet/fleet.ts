import { UnitStats, UnitType } from './../unit/factory/unit.abstract';
import { UnitNumbers } from './fleet.factory';

export interface UnitData {
  numberOfUnit: number;
  stats: UnitStats | any;
}

export class Fleet {
  public speed: number;
  public fleetConfiguration: Map<UnitType, UnitData>;
  constructor(
    fleetConfiguration: Map<UnitType, UnitData>,
    units?: UnitNumbers[]
  ) {
    this.fleetConfiguration = fleetConfiguration;
    if (units) {
      units.forEach((unit: UnitNumbers) => {
        this.fleetConfiguration.set(unit.unitType, {
          numberOfUnit: unit.numberOfUnit,
          stats: this.fleetConfiguration.get(unit.unitType).stats,
        });
      });
    }
  }
}
