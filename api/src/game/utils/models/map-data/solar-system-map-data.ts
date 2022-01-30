import { FleetMapData } from './fleet-map-data';
import { PlanetMapData } from './planet-map-data';

export interface SolarSystemMapPlanetData {
  isBattle: boolean;
  fleet: FleetMapData[];
  planet?: PlanetMapData;
}
