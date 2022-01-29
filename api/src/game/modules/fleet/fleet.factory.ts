import { UnitType } from './../../../game/utils/models/enums/unit-type';
import { RapidFireConfiguration } from './../../../game/utils/models/rapid-fire-configuration';
import { UnitStats } from './../../../game/utils/models/unit-stats';
import { unitConfigurationMap } from './../../utils/factories/unit-factory/configuration/unit.configuration';
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
    [
      UnitType.ROCKET_LAUNCHER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.ROCKET_LAUNCHER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.ROCKET_LAUNCHER).rapidFire,
      },
    ],
    [
      UnitType.LIGHT_LASER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.LIGHT_LASER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.LIGHT_LASER).rapidFire,
      },
    ],
    [
      UnitType.HEAVY_LASER,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.HEAVY_LASER).stats,
        rapidFire: unitConfigurationMap.get(UnitType.HEAVY_LASER).rapidFire,
      },
    ],
    [
      UnitType.ION_CANNON,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.ION_CANNON).stats,
        rapidFire: unitConfigurationMap.get(UnitType.ION_CANNON).rapidFire,
      },
    ],
    [
      UnitType.GAUSS_CANNON,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.GAUSS_CANNON).stats,
        rapidFire: unitConfigurationMap.get(UnitType.GAUSS_CANNON).rapidFire,
      },
    ],
    [
      UnitType.PLASMA_CANNON,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.PLASMA_CANNON).stats,
        rapidFire: unitConfigurationMap.get(UnitType.PLASMA_CANNON).rapidFire,
      },
    ],
    [
      UnitType.SMALL_SHIELD_DOME,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.SMALL_SHIELD_DOME).stats,
        rapidFire: unitConfigurationMap.get(UnitType.SMALL_SHIELD_DOME)
          .rapidFire,
      },
    ],
    [
      UnitType.LARGE_SHIELD_DOME,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.LARGE_SHIELD_DOME).stats,
        rapidFire: unitConfigurationMap.get(UnitType.LARGE_SHIELD_DOME)
          .rapidFire,
      },
    ],
    [
      UnitType.ANTI_BALLISTIC_MISSILE,
      {
        numberOfUnit: 0,
        stats: unitConfigurationMap.get(UnitType.ANTI_BALLISTIC_MISSILE).stats,
        rapidFire: unitConfigurationMap.get(UnitType.ANTI_BALLISTIC_MISSILE)
          .rapidFire,
      },
    ],
  ]);

  public static createFleet(unitNumbers: UnitNumbers[]): Fleet {
    return new Fleet(FleetFactory.fleetConfiguration, unitNumbers);
  }
}
