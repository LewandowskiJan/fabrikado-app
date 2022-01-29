import { Building } from './../../../game/modules/buildings/building';
import { Fleet } from './../../../game/modules/fleet/fleet';
import { Unit } from './../../../game/modules/units/unit';
import { Coordinates } from './coordinates';
import { CelestialBodyType } from './enums/celestial-body-type';
import { SolarSystemMapPlanetData } from './map-data/solar-system-map-data';

export interface PlanetData {
  celestialBodyType: CelestialBodyType;
  playerId: string;
  name: string;
  coordinates: Coordinates;
  size: number;
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
  defence: Unit[];
  units: Unit[];
  fleet: Fleet;
  solarSystemMapPlanetData: SolarSystemMapPlanetData;
}
