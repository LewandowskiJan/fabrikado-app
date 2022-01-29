import { BuildingType } from './../../../models/enums/building-type';
import { UnitType } from './../../../models/enums/unit-type';
import { UnitUsageType } from './../../../models/enums/unit-usage-type';
import { UnitConfiguration } from './unit.configuration';

export const defenceUnitConfiguration: [UnitType, UnitConfiguration][] = [
  [
    UnitType.ROCKET_LAUNCHER,
    {
      cost: {
        metal: 2_000,
        crystal: 0,
        deuterium: 0,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 2_000,
        shieldStrength: 20,
        attackStrength: 80,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.CRUISER, 10],
          [UnitType.BOMBER, 20],
          [UnitType.DEATH_STAR, 200],
        ]),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([[BuildingType.SHIPYARD, 1]]),
    },
  ],
  [
    UnitType.LIGHT_LASER,
    {
      cost: {
        metal: 1_500,
        crystal: 500,
        deuterium: 0,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 2_000,
        shieldStrength: 25,
        attackStrength: 100,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.DESTROYER, 10],
          [UnitType.BOMBER, 20],
          [UnitType.DEATH_STAR, 200],
        ]),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.ENERGY_TECHNOLOGY, 1],
        [BuildingType.SHIPYARD, 2],
        [BuildingType.LASER_TECHNOLOGY, 3],
      ]),
    },
  ],
  [
    UnitType.HEAVY_LASER,
    {
      cost: {
        metal: 6_000,
        crystal: 2_000,
        deuterium: 0,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 8_000,
        shieldStrength: 100,
        attackStrength: 250,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.BOMBER, 10],
          [UnitType.DEATH_STAR, 100],
        ]),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.ENERGY_TECHNOLOGY, 3],
        [BuildingType.SHIPYARD, 4],
        [BuildingType.LASER_TECHNOLOGY, 6],
      ]),
    },
  ],
  [
    UnitType.ION_CANNON,
    {
      cost: {
        metal: 5_000,
        crystal: 3_000,
        deuterium: 0,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 8_000,
        shieldStrength: 500,
        attackStrength: 150,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>([
          [UnitType.BOMBER, 10],
          [UnitType.DEATH_STAR, 100],
        ]),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 4],
        [BuildingType.ION_TECHNOLOGY, 4],
      ]),
    },
  ],
  [
    UnitType.GAUSS_CANNON,
    {
      cost: {
        metal: 20_000,
        crystal: 15_000,
        deuterium: 2_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 35_000,
        shieldStrength: 200,
        attackStrength: 1_100,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>([[UnitType.DEATH_STAR, 50]]),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 6],
        [BuildingType.ENERGY_TECHNOLOGY, 6],
        [BuildingType.WEAPON_TECHNOLOGY, 3],
        [BuildingType.SHIELDING_TECHNOLOGY, 1],
      ]),
    },
  ],
  [
    UnitType.PLASMA_CANNON,
    {
      cost: {
        metal: 50_000,
        crystal: 50_000,
        deuterium: 30_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 100_000,
        shieldStrength: 300,
        attackStrength: 3_000,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>(),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 8],
        [BuildingType.PLASMA_TECHNOLOGY, 7],
      ]),
    },
  ],
  [
    UnitType.SMALL_SHIELD_DOME,
    {
      cost: {
        metal: 10_000,
        crystal: 10_000,
        deuterium: 30_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 20_000,
        shieldStrength: 2_000,
        attackStrength: 1,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>(),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 1],
        [BuildingType.SHIELDING_TECHNOLOGY, 2],
      ]),
    },
  ],
  [
    UnitType.LARGE_SHIELD_DOME,
    {
      cost: {
        metal: 50_000,
        crystal: 50_000,
        deuterium: 30_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 100_000,
        shieldStrength: 10_000,
        attackStrength: 1,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>(),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.SHIPYARD, 6],
        [BuildingType.SHIELDING_TECHNOLOGY, 6],
      ]),
    },
  ],
  [
    UnitType.ANTI_BALLISTIC_MISSILE,
    {
      cost: {
        metal: 8_000,
        crystal: 0,
        deuterium: 2_000,
        energy: 0,
      },
      usage: UnitUsageType.COMBAT,
      stats: {
        structuralIntegrity: 1,
        shieldStrength: 1,
        attackStrength: 1,
        speed: 0,
        cargoCapacity: 0,
        fuelUsage: 0,
      },
      rapidFire: {
        from: new Map<UnitType, number>(),
        against: new Map<UnitType, number>(),
      },
      requirements: new Map<BuildingType, number>([
        [BuildingType.MISSILE_SILO, 2],
      ]),
    },
  ],
];
