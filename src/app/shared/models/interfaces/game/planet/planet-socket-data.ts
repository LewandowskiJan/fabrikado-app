import { BuildingSocketData } from '../building/building-socket-data';
import { Coordinates } from '../coordinates/coordinates';
import { ResourceData } from '../resources/resource-data';
import { FleetData } from '../unit/fleet-data';
import { UnitSocketData } from '../unit/unit-socket-data';

export interface PlanetSocketData {
  playerId: string;
  name: string;
  size: number;
  resources: ResourceData;
  resourcesCapacity: ResourceData;
  coordinates: Coordinates;
  satStrength: number;
  requireSat: number;
  crystal: number;
  deuterium: number;
  deuteriumEfficiency: number;
  averageTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  buildings: BuildingSocketData[];
  technologies: BuildingSocketData[];
  units: UnitSocketData[];
  defence: UnitSocketData[];
  fleet: FleetData;
  image?: string;
}
