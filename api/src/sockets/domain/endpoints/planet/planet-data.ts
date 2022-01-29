import { Building } from './../../../../game/modules/buildings/building';
import { Resource } from './../../../../game/modules/shared/resources/resource';
import { Unit } from './../../../../game/modules/units/unit';
import { FleetData } from './../fleets/fleet-data';

export interface CoordinatesSocketData {
  galacticIndex: number;
  solarSystemIndex: number;
  planetIndex: number;
}

export interface PlanetSocketData {
  playerId: string;
  name: string;
  size: number;
  resources: Resource;
  resourcesCapacity: Resource;
  coordinates: CoordinatesSocketData;
  satStrength: number;
  requireSat: number;
  crystal: number;
  deuterium: number;
  deuteriumEfficiency: number;
  averageTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  buildings: Building[];
  technologies: Building[];
  units: Unit[];
  defence: Unit[];
  fleet: FleetData;
}
