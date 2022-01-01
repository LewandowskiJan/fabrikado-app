import { RapidFireConfiguration, UnitStats, UnitType } from '../unit/factory/unit.abstract';
import { unitConfigurationMap } from './../unit/factory/unit.configuration';
import { Fleet } from './fleet';

export interface UnitData {
  numberOfUnit: number;
  stats: UnitStats | any;
  rapidFire: RapidFireConfiguration;
}

export interface UnitNumbers {
  numberOfUnit: number;
  unitType: UnitType;
}

export class FleetFactory {
  public static fleetConfiguration: Map<UnitType, UnitData> = new Map([
    [
      UnitType.SMALL_CARGO_SHIP,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.SMALL_CARGO_SHIP).stats,
        rapidFire: unitConfigurationMap.get(UnitType.SMALL_CARGO_SHIP)
          .rapidFire,
      },
    ],
    [
      UnitType.LARGE_CARGO_SHIP,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.LARGE_CARGO_SHIP).stats,
        rapidFire: unitConfigurationMap.get(UnitType.LARGE_CARGO_SHIP)
          .rapidFire,
      },
    ],
    [
      UnitType.LIGHT_FIGHTER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.LIGHT_FIGHTER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.LIGHT_FIGHTER).rapidFire,
      },
    ],
    [
      UnitType.HEAVY_FIGHTER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.HEAVY_FIGHTER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.HEAVY_FIGHTER).rapidFire,
      },
    ],
    [
      UnitType.CRUISER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.CRUISER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.CRUISER).rapidFire,
      },
    ],
    [
      UnitType.BATTLESHIP,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.BATTLESHIP).stats,
        rapidFire: unitConfigurationMap.get(UnitType.BATTLESHIP).rapidFire,
      },
    ],
    [
      UnitType.BATTLE_CRUISER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.BATTLE_CRUISER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.BATTLE_CRUISER).rapidFire,
      },
    ],
    [
      UnitType.BOMBER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.BOMBER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.BOMBER).rapidFire,
      },
    ],
    [
      UnitType.DESTROYER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.DESTROYER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.DESTROYER).rapidFire,
      },
    ],
    [
      UnitType.DEATH_STAR,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.DEATH_STAR).stats,
        rapidFire: unitConfigurationMap.get(UnitType.DEATH_STAR).rapidFire,
      },
    ],
    [
      UnitType.REAPER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.REAPER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.REAPER).rapidFire,
      },
    ],
    [
      UnitType.PATHFINDER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.PATHFINDER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.PATHFINDER).rapidFire,
      },
    ],
    [
      UnitType.RECYCLER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.RECYCLER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.RECYCLER).rapidFire,
      },
    ],
    [
      UnitType.ESPIONAGE_PROBE,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.ESPIONAGE_PROBE).stats,
        rapidFire: unitConfigurationMap.get(UnitType.ESPIONAGE_PROBE).rapidFire,
      },
    ],
    [
      UnitType.SOLAR_SATELLITE,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.SOLAR_SATELLITE).stats,
        rapidFire: unitConfigurationMap.get(UnitType.SOLAR_SATELLITE).rapidFire,
      },
    ],
    [
      UnitType.COLONY_SHIP,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.COLONY_SHIP).stats,
        rapidFire: unitConfigurationMap.get(UnitType.COLONY_SHIP).rapidFire,
      },
    ],
    [
      UnitType.CRAWLER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.CRAWLER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.CRAWLER).rapidFire,
      },
    ],
  ]);

  public static createFleet(unitNumbers: UnitNumbers[]): Fleet {
    return new Fleet(FleetFactory.fleetConfiguration, unitNumbers);
  }
}
