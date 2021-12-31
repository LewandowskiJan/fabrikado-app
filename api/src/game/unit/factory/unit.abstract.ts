import { BuildingType } from './../../building/configuration/buildingType';
import { Resource } from './../../planet/resources/resource';
import { UnitConfiguration } from './unit.configuration';

export enum UnitType {
  SMALL_CARGO_SHIP = 'SMALL_CARGO_SHIP',
  LARGE_CARGO_SHIP = 'LARGE_CARGO_SHIP',
  LIGHT_FIGHTER = 'LIGHT_FIGHTER',
  HEAVY_FIGHTER = 'HEAVY_FIGHTER',
  CRUISER = 'CRUISER',
  BATTLESHIP = 'BATTLESHIP',
  BATTLE_CRUISER = 'BATTLE_CRUISER',
  BOMBER = 'BOMBER',
  DESTROYER = 'DESTROYER',
  DEATH_STAR = 'DEATH_STAR',
  REAPER = 'REAPER',
  PATHFINDER = 'PATHFINDER',
  RECYCLER = 'RECYCLER',
  ESPIONAGE_PROBE = 'ESPIONAGE_PROBE',
  SOLAR_SATELLITE = 'SOLAR_SATELLITE',
  COLONY_SHIP = 'COLONY_SHIP',
  CRAWLER = 'CRAWLER',
  // todo: migrate to defence building
  ROCKET_LAUNCHER = 'ROCKET_LAUNCHER',
  LIGHT_LASER = 'LIGHT_LASER',
  HEAVY_LASER = 'HEAVY_LASER',
  ION_CANNON = 'ION_CANNON',
  GAUSS_CANNON = 'GAUSS_CANNON',
  PLASMA_CANNON = 'PLASMA_CANNON',
}

export enum UnitUsageType {
  COMBAT = 'COMBAT',
  CIVIL = 'CIVIL',
}

export interface UnitStats {
  structuralIntegrity: number;
  shieldStrength: number;
  attackStrength: number;
  speed: number;
  cargoCapacity: number;
  fuelUsage: number;
}

export interface UnitRequirements {
  technology: Map<BuildingType, number>;
}

export interface RapidFireConfiguration {
  from: Map<UnitType, number>;
  against: Map<UnitType, number>;
}

export abstract class UnitAbstract {
  cost: Resource;
  type: UnitType;
  usage: UnitUsageType;

  stats: UnitStats;
  rapidFire: RapidFireConfiguration;
  requirements: UnitRequirements;

  constructor(unitType: UnitType, unitConfiguration: UnitConfiguration) {
    this.type = unitType;
    this.cost = unitConfiguration.cost;
    this.usage = unitConfiguration.usage;
    this.stats = unitConfiguration.stats;
    this.rapidFire = unitConfiguration.rapidFire;
    this.requirements = unitConfiguration.requirements;
  }
}
