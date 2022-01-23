import {
  GALAXIES_LAYOUT_NUMBER,
  LAYOUTS_IN_SOLAR_SYSTEM,
  SOLAR_SYSTEMS_LAYOUT_NUMBER,
  UNIVERSE_NUMBER,
} from '../configuration/globals-variables';
import { Galactic } from './model/galactic';
import { SolarSystem } from './model/solar-system';
import { Universe } from './model/universe';
import { MapGenerator } from './services/map-generator';
import { HexagonUtilService } from './util/hexagon-util.service';

export interface GameMap {
  universe: Map<string, Universe>;
  galaxies: Map<string, Galactic>;
  solarSystems: Map<string, SolarSystem>;
}

export class MapGeneratorService {
  public static generateUniverse(): GameMap {
    const config: GameMap = {
      universe: new Map(),
      galaxies: new Map(),
      solarSystems: new Map(),
    };

    const universeNumber: number =
      HexagonUtilService.countHexagonsByLayouts(UNIVERSE_NUMBER);

    const galaxiesNumber: number = HexagonUtilService.countHexagonsByLayouts(
      GALAXIES_LAYOUT_NUMBER
    );

    const solarSystemNumber: number = HexagonUtilService.countHexagonsByLayouts(
      SOLAR_SYSTEMS_LAYOUT_NUMBER
    );

    for (
      let universeIndex: number = 1;
      universeIndex <= universeNumber;
      universeIndex++
    ) {
      const universe: Universe = new Universe(`U-${universeIndex}`);
      universe.setupMap(
        MapGenerator.generate(GALAXIES_LAYOUT_NUMBER, {
          universe: `U-${universeIndex}`,
        })
      );
      config.universe.set(universe.id, universe);
      for (
        let galacticIndex: number = 1;
        galacticIndex <= galaxiesNumber;
        galacticIndex++
      ) {
        const galactic: Galactic = new Galactic(
          `G-${galacticIndex}`,
          `U-${universeIndex}`
        );
        galactic.setupMap(
          MapGenerator.generate(SOLAR_SYSTEMS_LAYOUT_NUMBER, {
            universe: `U-${universeIndex}`,
            galactic: `G-${galacticIndex}`,
          })
        );
        config.galaxies.set(galactic.id, galactic);
        universe.addGalactic(galactic);
        for (
          let solarSystemIndex: number = 1;
          solarSystemIndex <= solarSystemNumber;
          solarSystemIndex++
        ) {
          const solarSystem: SolarSystem = new SolarSystem(
            `S-${solarSystemIndex}`,
            `U-${universeIndex}`,
            `G-${galacticIndex}`
          );

          solarSystem.setupMap(
            MapGenerator.generate(
              LAYOUTS_IN_SOLAR_SYSTEM,
              {
                universe: `U-${universeIndex}`,
                galactic: `G-${galacticIndex}`,
                solarSystem: `S-${solarSystemIndex}`,
                coordinates: {
                  galacticIndex: galacticIndex,
                  solarSystemIndex: solarSystemIndex,
                },
              },
              solarSystem
            )
          );
          config.solarSystems.set(solarSystem.id, solarSystem);
          galactic.addSolarSystem(solarSystem);
        }
      }
    }
    return config;
  }
}
