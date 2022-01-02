import { Unit } from '@src/app/game/cosmos/modules/shipyard/model/unit';
import { Building } from '@src/app/shared/models/building';
import { Resource } from '@src/app/shared/models/resource';

import { FleetData } from '../fleets/fleet-data';

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
