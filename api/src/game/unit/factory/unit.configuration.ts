import { BuildingType } from './../../building/configuration/buildingType';
import { Resource } from './../../planet/resources/resource';
import {
  RapidFireConfiguration,
  UnitRequirements,
  UnitStats,
  UnitType,
  UnitUsageType,
} from './unit.abstract';

export interface UnitConfiguration {
  cost: Resource;
  usage: UnitUsageType;
  stats: UnitStats;
  rapidFire: RapidFireConfiguration;
  requirements: UnitRequirements;
}

export const unitConfigurationMap: Map<UnitType, UnitConfiguration> = new Map([
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
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 2],
          [BuildingType.COMBUSTION_DRIVE, 2],
        ]),
      },
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
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 4],
          [BuildingType.COMBUSTION_DRIVE, 6],
        ]),
      },
    },
  ],
  [
    UnitType.LIGHT_FIGHTER,
    {
      cost: { metal: 3_000, crystal: 1_000, deuterium: 0, energy: 0 },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 4_000,
        shieldStrength: 10,
        attackStrength: 50,
        speed: 12_500,
        cargoCapacity: 50,
        fuelUsage: 20,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.CRUISER, 6],
          [UnitType.DEATH_STAR, 200],
          [UnitType.PATHFINDER, 3],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 1],
          [BuildingType.COMBUSTION_DRIVE, 1],
        ]),
      },
    },
  ],
  [
    UnitType.HEAVY_FIGHTER,
    {
      cost: { metal: 6_000, crystal: 4_000, deuterium: 0, energy: 0 },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 10_000,
        shieldStrength: 25,
        attackStrength: 150,
        speed: 10_000,
        cargoCapacity: 100,
        fuelUsage: 75,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.BATTLE_CRUISER, 6],
          [UnitType.DEATH_STAR, 100],
          [UnitType.PATHFINDER, 2],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.SMALL_CARGO_SHIP, 3],
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 3],
          [BuildingType.ARMOUR_TECHNOLOGY, 2],
          [BuildingType.IMPULSE_DRIVE, 2],
        ]),
      },
    },
  ],
  [
    UnitType.CRUISER,
    {
      cost: { metal: 20_000, crystal: 7_000, deuterium: 2_000, energy: 0 },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 27_000,
        shieldStrength: 50,
        attackStrength: 400,
        speed: 15_000,
        cargoCapacity: 800,
        fuelUsage: 300,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.BATTLE_CRUISER, 4],
          [UnitType.DEATH_STAR, 33],
          [UnitType.PATHFINDER, 3],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.LIGHT_FIGHTER, 6],
          [UnitType.CRAWLER, 5],
          [UnitType.ROCKET_LAUNCHER, 10],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.ION_TECHNOLOGY, 2],
          [BuildingType.IMPULSE_DRIVE, 4],
          [BuildingType.SHIPYARD, 5],
        ]),
      },
    },
  ],
  [
    UnitType.BATTLESHIP,
    {
      cost: { metal: 45_000, crystal: 15_000, deuterium: 0, energy: 0 },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 60_000,
        shieldStrength: 200,
        attackStrength: 1_000,
        speed: 10_000,
        cargoCapacity: 1500,
        fuelUsage: 500,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.DEATH_STAR, 30],
          [UnitType.BATTLE_CRUISER, 7],
          [UnitType.REAPER, 7],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
          [UnitType.PATHFINDER, 5],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.HYPERSPACE_TECHNOLOGY, 4],
          [BuildingType.SHIPYARD, 7],
        ]),
      },
    },
  ],
  [
    UnitType.BATTLE_CRUISER,
    {
      cost: { metal: 30_000, crystal: 40_000, deuterium: 15_000, energy: 0 },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 70_000,
        shieldStrength: 400,
        attackStrength: 700,
        speed: 10_000,
        cargoCapacity: 750,
        fuelUsage: 250,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.DEATH_STAR, 15],
          [UnitType.DESTROYER, 2],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.SMALL_CARGO_SHIP, 3],
          [UnitType.LARGE_CARGO_SHIP, 3],
          [UnitType.HEAVY_FIGHTER, 4],
          [UnitType.CRUISER, 4],
          [UnitType.BATTLESHIP, 7],
          [UnitType.CRAWLER, 5],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.HYPERSPACE_TECHNOLOGY, 5],
          [BuildingType.HYPERSPACE_DRIVE, 5],
          [BuildingType.SHIPYARD, 8],
          [BuildingType.LASER_TECHNOLOGY, 12],
        ]),
      },
    },
  ],
  [
    UnitType.BOMBER,
    {
      cost: { metal: 50_000, crystal: 25_000, deuterium: 15_000, energy: 0 },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 75_000,
        shieldStrength: 500,
        attackStrength: 1_000,
        speed: 4_000,
        cargoCapacity: 500,
        fuelUsage: 700,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.DEATH_STAR, 25],
          [UnitType.REAPER, 4],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
          [UnitType.ROCKET_LAUNCHER, 20],
          [UnitType.LIGHT_LASER, 20],
          [UnitType.HEAVY_LASER, 10],
          [UnitType.ION_CANNON, 10],
          [UnitType.GAUSS_CANNON, 5],
          [UnitType.PLASMA_CANNON, 5],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.PLASMA_TECHNOLOGY, 5],
          [BuildingType.IMPULSE_DRIVE, 6],
          [BuildingType.SHIPYARD, 8],
        ]),
      },
    },
  ],
  [
    UnitType.DESTROYER,
    {
      cost: { metal: 60_000, crystal: 50_000, deuterium: 15_000, energy: 0 },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 110_000,
        shieldStrength: 500,
        attackStrength: 2_000,
        speed: 5_000,
        cargoCapacity: 2_000,
        fuelUsage: 1_000,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.DEATH_STAR, 5],
          [UnitType.REAPER, 3],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.BATTLE_CRUISER, 2],
          [UnitType.CRAWLER, 5],
          [UnitType.LIGHT_LASER, 10],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 9],
          [BuildingType.HYPERSPACE_DRIVE, 6],
          [BuildingType.HYPERSPACE_TECHNOLOGY, 5],
        ]),
      },
    },
  ],
  [
    UnitType.DEATH_STAR,
    {
      cost: {
        metal: 5_000_000,
        crystal: 4_000_000,
        deuterium: 1_000_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 9_000_000,
        shieldStrength: 50_000,
        attackStrength: 200_000,
        speed: 100,
        cargoCapacity: 1_000_000,
        fuelUsage: 1,
      },
      rapidFire: {
        from: new Map<UnitType, number>(),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 1250],
          [UnitType.SOLAR_SATELLITE, 1250],
          [UnitType.SMALL_CARGO_SHIP, 250],
          [UnitType.LARGE_CARGO_SHIP, 250],
          [UnitType.LIGHT_FIGHTER, 200],
          [UnitType.HEAVY_FIGHTER, 100],
          [UnitType.CRUISER, 33],
          [UnitType.BATTLESHIP, 30],
          [UnitType.COLONY_SHIP, 250],
          [UnitType.RECYCLER, 250],
          [UnitType.BOMBER, 25],
          [UnitType.DESTROYER, 5],
          [UnitType.BATTLE_CRUISER, 15],
          [UnitType.PATHFINDER, 10],
          [UnitType.REAPER, 30],
          [UnitType.CRAWLER, 1250],
          [UnitType.ROCKET_LAUNCHER, 200],
          [UnitType.LIGHT_LASER, 200],
          [UnitType.HEAVY_LASER, 100],
          [UnitType.ION_CANNON, 100],
          [UnitType.GAUSS_CANNON, 50],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.GRAVITON_TECHNOLOGY, 1],
          [BuildingType.HYPERSPACE_TECHNOLOGY, 6],
          [BuildingType.HYPERSPACE_DRIVE, 7],
          [BuildingType.SHIPYARD, 12],
        ]),
      },
    },
  ],
  [
    UnitType.REAPER,
    {
      cost: {
        metal: 85_000,
        crystal: 55_000,
        deuterium: 20_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 140_000,
        shieldStrength: 700,
        attackStrength: 2_800,
        speed: 7_000,
        cargoCapacity: 10_000,
        fuelUsage: 1_100,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.DEATH_STAR, 10],
          [UnitType.ION_CANNON, 2],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
          [UnitType.BATTLESHIP, 7],
          [UnitType.BOMBER, 4],
          [UnitType.DESTROYER, 3],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIELDING_TECHNOLOGY, 6],
          [BuildingType.HYPERSPACE_TECHNOLOGY, 6],
          [BuildingType.HYPERSPACE_DRIVE, 7],
          [BuildingType.SHIPYARD, 10],
        ]),
      },
    },
  ],
  [
    UnitType.PATHFINDER,
    {
      cost: {
        metal: 8_000,
        crystal: 15_000,
        deuterium: 8_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 23_000,
        shieldStrength: 100,
        attackStrength: 200,
        speed: 12_000,
        cargoCapacity: 10_000,
        fuelUsage: 300,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.DEATH_STAR, 30],
          [UnitType.BATTLESHIP, 5],
        ]),
        against: new Map<UnitType, number>([
          [UnitType.ESPIONAGE_PROBE, 5],
          [UnitType.SOLAR_SATELLITE, 5],
          [UnitType.CRAWLER, 5],
          [UnitType.CRUISER, 3],
          [UnitType.LIGHT_FIGHTER, 3],
          [UnitType.HEAVY_FIGHTER, 2],
        ]),
      },
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 5],
          [BuildingType.HYPERSPACE_DRIVE, 2],
          [BuildingType.SHIELDING_TECHNOLOGY, 4],
        ]),
      },
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
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 4],
          [BuildingType.COMBUSTION_DRIVE, 6],
          [BuildingType.SHIELDING_TECHNOLOGY, 2],
        ]),
      },
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
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 3],
          [BuildingType.COMBUSTION_DRIVE, 3],
          [BuildingType.ESPIONAGE_TECHNOLOGY, 2],
        ]),
      },
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
      requirements: {
        technology: new Map<BuildingType, number>([[BuildingType.SHIPYARD, 1]]),
      },
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
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 4],
          [BuildingType.IMPULSE_DRIVE, 3],
        ]),
      },
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
      requirements: {
        technology: new Map<BuildingType, number>([
          [BuildingType.SHIPYARD, 5],
          [BuildingType.COMBUSTION_DRIVE, 4],
          [BuildingType.ARMOUR_TECHNOLOGY, 4],
          [BuildingType.LASER_TECHNOLOGY, 4],
        ]),
      },
    },
  ],
]);
