import { FleetMapData } from './fleet-map-data';
import { PlanetMapData } from './planet-map-data';

export interface SolarSystemMapPlanetData {
  planet: PlanetMapData;
  isBattle: boolean;
  fleet: FleetMapData[];
}
