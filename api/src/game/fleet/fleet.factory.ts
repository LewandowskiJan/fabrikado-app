import { UnitStats, UnitType } from '../unit/factory/unit.abstract';
import { unitConfigurationMap } from './../unit/factory/unit.configuration';
import { Fleet } from './fleet';

export interface UnitData {
  numberOfUnit: number;
  stats: UnitStats | any;
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
      },
    ],
    [
      UnitType.LARGE_CARGO_SHIP,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.LARGE_CARGO_SHIP).stats,
      },
    ],
    [
      UnitType.LIGHT_FIGHTER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.LIGHT_FIGHTER).stats,
      },
    ],
    [
      UnitType.HEAVY_FIGHTER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.HEAVY_FIGHTER).stats,
      },
    ],
    [
      UnitType.CRUISER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.CRUISER).stats,
      },
    ],
    [
      UnitType.BATTLESHIP,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.BATTLESHIP).stats,
      },
    ],
    [
      UnitType.BATTLE_CRUISER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.BATTLE_CRUISER).stats,
      },
    ],
    [
      UnitType.BOMBER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.BOMBER).stats,
      },
    ],
    [
      UnitType.DESTROYER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.DESTROYER).stats,
      },
    ],
    [
      UnitType.DEATH_STAR,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.DEATH_STAR).stats,
      },
    ],
    [
      UnitType.REAPER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.REAPER).stats,
      },
    ],
    [
      UnitType.PATHFINDER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.PATHFINDER).stats,
      },
    ],
    [
      UnitType.RECYCLER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.RECYCLER).stats,
      },
    ],
    [
      UnitType.ESPIONAGE_PROBE,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.ESPIONAGE_PROBE).stats,
      },
    ],
    [
      UnitType.SOLAR_SATELLITE,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.SOLAR_SATELLITE).stats,
      },
    ],
    [
      UnitType.COLONY_SHIP,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.COLONY_SHIP).stats,
      },
    ],
    [
      UnitType.CRAWLER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.CRAWLER).stats,
      },
    ],
  ]);

  public static createFleet(unitNumbers: UnitNumbers[]): Fleet {
    return new Fleet(FleetFactory.fleetConfiguration, unitNumbers);
  }
}
