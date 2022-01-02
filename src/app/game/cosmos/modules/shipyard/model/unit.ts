import { BuildingType } from '@src/app/shared/models/buildingType';
import { Resource } from '@src/app/shared/models/resource';

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
  SMALL_SHIELD_DOME = 'SMALL_SHIELD_DOME',
  LARGE_SHIELD_DOME = 'LARGE_SHIELD_DOME',
  ANTI_BALLISTIC_MISSILE = 'ANTI_BALLISTIC_MISSILE',
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

export type Requirements = Map<BuildingType, number>;

export interface RapidFireConfiguration {
  from: Map<UnitType, number>;
  against: Map<UnitType, number>;
}

export interface Unit {
  name: string;
  cost: Resource;
  type: UnitType;
  usage: UnitUsageType;
  stats: UnitStats;
  rapidFire: RapidFireConfiguration;
  requirements: Requirements;
  rapidFireArray: { against: any[]; from: any[] };
  requirementsArray: any[];
  creatingTime: number;
  creatingTimeLeft: number;
  onCreation: boolean;
  image?: string;
}
