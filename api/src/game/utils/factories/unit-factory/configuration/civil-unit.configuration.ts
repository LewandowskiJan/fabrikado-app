import { BuildingType } from './../../../models/enums/building-type';
import { UnitType } from './../../../models/enums/unit-type';
import { UnitUsageType } from './../../../models/enums/unit-usage-type';
import { UnitConfiguration } from './unit.configuration';

export const civilUnitConfiguration: [UnitType, UnitConfiguration][] = [
  [
    UnitType.SMALL_CARGO_SHIP,
    {
      cost: { metal: 2_000, crystal: 2_000, deuterium: 0, energy: 0 },
      usage: UnitUsageType.CIVIL,
      stats: {
        structuralIntegrity: 4_000,
        shieldStrength: 10,
        attackStrength: 5,
        speed: 5_000,
        cargoCapacity: 5_000,
        fuelUsage: 10,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.HEAVY_FIGHTER, 3],
          [UnitType.BATTLE_CRUISER, 3],
          [UnitType.DEATH_STAR, 250],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
        ]),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 2],
        [BuildingType.COMBUSTION_DRIVE, 2],
      ]),
    },
  ],
  [
    UnitType.LARGE_CARGO_SHIP,
    {
      cost: { metal: 6_000, crystal: 6_000, deuterium: 0, energy: 0 },
      usage: UnitUsageType.CIVIL,
      stats: {
        structuralIntegrity: 12_000,
        shieldStrength: 25,
        attackStrength: 5,
        speed: 7_500,
        cargoCapacity: 25_000,
        fuelUsage: 50,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.BATTLE_CRUISER, 3],
          [UnitType.DEATH_STAR, 250],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
        ]),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 4],
        [BuildingType.COMBUSTION_DRIVE, 6],
      ]),
    },
  ],
  [
    UnitType.RECYCLER,
    {
      cost: { metal: 10_000, crystal: 6_000, deuterium: 2_000, energy: 0 },
      usage: UnitUsageType.CIVIL,
      stats: {
        structuralIntegrity: 16_000,
        shieldStrength: 10,
        attackStrength: 1,
        speed: 2_000,
        cargoCapacity: 20_000,
        fuelUsage: 300,
      },
      rapidFire: {
        from: new Map<UnitType, number>([[UnitType.DEATH_STAR, 250]]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
        ]),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 4],
        [BuildingType.COMBUSTION_DRIVE, 6],
        [BuildingType.SHIELDING_TECHNOLOGY, 2],
      ]),
    },
  ],
  [
    UnitType.ESPIONAGE_PROBE,
    {
      cost: { metal: 0, crystal: 1_000, deuterium: 0, energy: 0 },
      usage: UnitUsageType.CIVIL,
      stats: {
        structuralIntegrity: 1_000,
        shieldStrength: 0,
        attackStrength: 0,
        speed: 100_000_000,
        cargoCapacity: 5,
        fuelUsage: 1,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.SMALL_CARGO_SHIP, 5],
          [UnitType.LARGE_CARGO_SHIP, 5],
          [UnitType.LIGHT_FIGHTER, 5],
          [UnitType.HEAVY_FIGHTER, 5],
          [UnitType.CRUISER, 5],
          [UnitType.BATTLE_CRUISER, 5],
          [UnitType.BATTLESHIP, 5],
          [UnitType.COLONY_SHIP, 5],
          [UnitType.RECYCLER, 5],
          [UnitType.BOMBER, 5],
          [UnitType.DESTROYER, 5],
          [UnitType.DEATH_STAR, 1_250],
          [UnitType.REAPER, 5],
          [UnitType.PATHFINDER, 5],
        ]),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 3],
        [BuildingType.COMBUSTION_DRIVE, 3],
        [BuildingType.ESPIONAGE_TECHNOLOGY, 2],
      ]),
    },
  ],
  [
    UnitType.SOLAR_SATELLITE,
    {
      cost: { metal: 0, crystal: 2_000, deuterium: 500, energy: 0 },
      usage: UnitUsageType.CIVIL,
      stats: {
        structuralIntegrity: 2_000,
        shieldStrength: 1,
        attackStrength: 1,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.SMALL_CARGO_SHIP, 5],
          [UnitType.LARGE_CARGO_SHIP, 5],
          [UnitType.LIGHT_FIGHTER, 5],
          [UnitType.HEAVY_FIGHTER, 5],
          [UnitType.CRUISER, 5],
          [UnitType.BATTLE_CRUISER, 5],
          [UnitType.BATTLESHIP, 5],
          [UnitType.COLONY_SHIP, 5],
          [UnitType.RECYCLER, 5],
          [UnitType.BOMBER, 5],
          [UnitType.DESTROYER, 5],
          [UnitType.DEATH_STAR, 1_250],
          [UnitType.REAPER, 5],
          [UnitType.PATHFINDER, 5],
        ]),
        against: new Map<UnitType, number>(),
      },

      requirements: new Map<BuildingType, number>([[BuildingType.SHIPYARD, 1]]),
    },
  ],
  [
    UnitType.COLONY_SHIP,
    {
      cost: { metal: 10_000, crystal: 20_000, deuterium: 10_000, energy: 0 },
      usage: UnitUsageType.CIVIL,
      stats: {
        structuralIntegrity: 30_000,
        shieldStrength: 100,
        attackStrength: 50,
        speed: 7_500,
        cargoCapacity: 2_500,
        fuelUsage: 1_000,
      },
      rapidFire: {
        from: new Map<UnitType, number>([[UnitType.DEATH_STAR, 250]]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
        ]),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 4],
        [BuildingType.IMPULSE_DRIVE, 3],
      ]),
    },
  ],
  [
    UnitType.CRAWLER,
    {
      cost: { metal: 2_000, crystal: 2_000, deuterium: 1_000, energy: 0 },
      usage: UnitUsageType.CIVIL,
      stats: {
        structuralIntegrity: 4_000,
        shieldStrength: 1,
        attackStrength: 1,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.SMALL_CARGO_SHIP, 5],
          [UnitType.LARGE_CARGO_SHIP, 5],
          [UnitType.LIGHT_FIGHTER, 5],
          [UnitType.HEAVY_FIGHTER, 5],
          [UnitType.CRUISER, 5],
          [UnitType.BATTLE_CRUISER, 5],
          [UnitType.BATTLESHIP, 5],
          [UnitType.COLONY_SHIP, 5],
          [UnitType.RECYCLER, 5],
          [UnitType.BOMBER, 5],
          [UnitType.DESTROYER, 5],
          [UnitType.DEATH_STAR, 1_250],
          [UnitType.REAPER, 5],
          [UnitType.PATHFINDER, 5],
        ]),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 5],
        [BuildingType.COMBUSTION_DRIVE, 4],
        [BuildingType.ARMOUR_TECHNOLOGY, 4],
        [BuildingType.LASER_TECHNOLOGY, 4],
      ]),
    },
  ],
];
