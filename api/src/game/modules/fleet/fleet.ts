
import { UnitType } from './../../../game/utils/models/enums/unit-type';
import { RapidFireConfiguration } from './../../../game/utils/models/rapid-fire-configuration';
import { UnitData, UnitNumbers } from './fleet.factory';

export class Fleet {
  public speed: number;
  public fuelUsage: number;
  public fleetConfiguration: Map<UnitType, UnitData>;
  public fleetArray: UnitNumbers[];

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
          rapidFire: this.fleetConfiguration.get(unit.unitType).rapidFire,
        });
      });
    }
    this.setupSpeedAndFuelUsageAndFleetArray();
  }

  public addShip(unitType: UnitType, numberOfUnits: number): void {
    const {
      numberOfUnit,
      stats,
      rapidFire,
    }: { numberOfUnit: number; stats: any; rapidFire: RapidFireConfiguration } =
      this.fleetConfiguration.get(unitType);
    this.fleetConfiguration.set(unitType, {
      numberOfUnit: numberOfUnit + numberOfUnits,
      stats,
      rapidFire,
    });
    this.setupSpeedAndFuelUsageAndFleetArray();
  }

  public removeShip(unitType: UnitType, numberOfUnits: number): void {
    this.addShip(unitType, -numberOfUnits);
  }

  private setupSpeedAndFuelUsageAndFleetArray(): void {
    const array: any[] = [];
    let speed: number = 0;
    let fuelUsage: number = 0;
    this.fleetConfiguration.forEach((value: UnitData, key: UnitType) => {
      fuelUsage += value.stats.fuelUsage * value.numberOfUnit;
      speed = value.stats.speed < speed ? value.stats.speed : speed;
      array.push({ numberOfUnit: value.numberOfUnit, unitType: key });
    });
    this.fuelUsage = fuelUsage;
    this.speed = speed;
    this.fleetArray = array;
  }
}
