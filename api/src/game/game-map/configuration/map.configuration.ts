import {
  GalacticConfiguration,
  galacticConfiguration,
} from './galactic.configuration';
import {
  SolarSystemConfiguration,
  solarSystemConfiguration,
} from './solar-system.configuration';
import {
  UniverseConfiguration,
  universeConfiguration,
} from './universe.configuration';

export interface MapConfiguration {
  universe: UniverseConfiguration;
  galactic: GalacticConfiguration;
  solarSystem: SolarSystemConfiguration;
}

export const mapConfiguration: MapConfiguration = {
  universe: universeConfiguration,
  galactic: galacticConfiguration,
  solarSystem: solarSystemConfiguration,
};
