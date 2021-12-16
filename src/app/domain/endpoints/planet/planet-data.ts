import { BuildingSocketData } from '../buildings/buildings';

export interface CoordinatesSocketData {
  galacticIndex: number;
  solarSystemIndex: number;
  planetIndex: number;
}

export interface PlanetSocketData {
  playerId: string;
  name: string;
  size:number;
  coordinates: CoordinatesSocketData;
  satStrength: number;
  requireSat: number;
  crystal: number;
  deuterium: number;
  deuteriumEfficiency: number;
  averageTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  buildings: BuildingSocketData[];
}
