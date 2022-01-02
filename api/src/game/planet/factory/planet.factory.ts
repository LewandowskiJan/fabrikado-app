import { Building } from '../../building/building';
import { Coordinates } from '../../model/coordinates/coordinates';
import { Planet } from '../planet';
import { PlanetNameGenerator } from '../util/planet-name.generator';
import { PlanetSizeGenerator } from '../util/planet-size.generator';
import { BuildingFactory } from './../../building/building.factory';
import { BuildingType } from './../../building/configuration/buildingType';
import { Fleet } from './../../fleet/fleet';
import { UnitType } from './../../unit/factory/unit.abstract';
import { UnitFactory } from './../../unit/factory/unit.factory';
import { Unit } from './../../unit/unit';
import {
  PlanetConfiguration,
  planetConfigurationByPlanetIndexMap,
} from './planet.configuration';

export interface Temperatures {
  averageTemperature: number;
  maxTemperature: number;
  minTemperature: number;
}

export interface PlanetData {
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
}

export class PlanetFactory {
  public static planetConfiguration: Map<number, PlanetConfiguration> =
    planetConfigurationByPlanetIndexMap;

  public static generatePlanet(coordinates: Coordinates): Planet {
    const temperatures: Temperatures =
      PlanetFactory.calculateTemperatureBaseOnPlanetIndex(
        coordinates.planetIndex
      );

    // todo: test only
    let playerId: string;
    if (
      coordinates.galacticIndex === 1 &&
      coordinates.solarSystemIndex === 1 &&
      coordinates.planetIndex === 1
    ) {
      playerId = '61c3871db04d1e63f2ddbf2f';
    }

    if (
      coordinates.galacticIndex === 1 &&
      coordinates.solarSystemIndex === 1 &&
      coordinates.planetIndex === 2
    ) {
      playerId = '61c3871db04d1e63f2ddbf2f';
    }

    if (
      coordinates.galacticIndex === 1 &&
      coordinates.solarSystemIndex === 1 &&
      coordinates.planetIndex === 3
    ) {
      playerId = '61c9fb4ac2fbb2a228441a99';
    }

    if (
      coordinates.galacticIndex === 1 &&
      coordinates.solarSystemIndex === 1 &&
      coordinates.planetIndex === 4
    ) {
      playerId = '61c9fb4ac2fbb2a228441a99';
    }
    // remove under

    const planetInitialData: PlanetData = {
      playerId,
      coordinates,
      name: PlanetNameGenerator.generatePlanetNameBaseOnCoordinates(
        coordinates
      ),
      satStrength: PlanetFactory.planetConfiguration.get(
        coordinates.planetIndex
      ).satStrength,
      requireSat: PlanetFactory.planetConfiguration.get(coordinates.planetIndex)
        .requireSat,
      crystal: PlanetFactory.planetConfiguration.get(coordinates.planetIndex)
        .crystal,
      deuterium: PlanetFactory.planetConfiguration.get(coordinates.planetIndex)
        .deuterium,
      deuteriumEfficiency: PlanetFactory.planetConfiguration.get(
        coordinates.planetIndex
      ).deuteriumEfficiency,
      ...temperatures,
      buildings: PlanetFactory.setupBuildings(temperatures.averageTemperature),
      technologies: PlanetFactory.setupTechnologies(
        temperatures.averageTemperature
      ),
      defence: PlanetFactory.setupDefence(),
      units: PlanetFactory.setupUnits(),
      size: PlanetSizeGenerator.generatePlanetSizeByPlanetIndex(
        coordinates.planetIndex
      ),
      fleet: undefined,
    };

    return new Planet(planetInitialData);
  }

  private static calculateTemperatureBaseOnPlanetIndex(
    planetIndex: number
  ): Temperatures {
    const max: number =
      PlanetFactory.planetConfiguration.get(planetIndex).maxTemperature;
    const min: number = max - 60;
    const maxTemperature: number = Math.floor(60 * Math.random() + min);
    const minTemperature: number =
      Math.floor((maxTemperature - min) * Math.random()) + min;

    return {
      averageTemperature: PlanetFactory.calculateAverageTemperature(
        maxTemperature,
        minTemperature
      ),
      maxTemperature,
      minTemperature,
    };
  }

  private static calculateAverageTemperature(
    maxTemperature: number,
    minTemperature: number
  ): number {
    return Math.floor((maxTemperature + minTemperature) / 2);
  }

  private static setupTechnologies(averageTemperature: number): Building[] {
    const buildings: Building[] = [];
    [
      BuildingType.COMBUSTION_DRIVE,
      BuildingType.IMPULSE_DRIVE,
      BuildingType.ARMOUR_TECHNOLOGY,
      BuildingType.ION_TECHNOLOGY,
      BuildingType.HYPERSPACE_TECHNOLOGY,
      BuildingType.HYPERSPACE_DRIVE,
      BuildingType.LASER_TECHNOLOGY,
      BuildingType.PLASMA_TECHNOLOGY,
      BuildingType.GRAVITON_TECHNOLOGY,
      BuildingType.SHIELDING_TECHNOLOGY,
      BuildingType.ESPIONAGE_TECHNOLOGY,
      BuildingType.COMPUTER_TECHNOLOGY,
      BuildingType.WEAPON_TECHNOLOGY,
      BuildingType.ENERGY_TECHNOLOGY,
      BuildingType.INTERGALACTIC_RESEARCH_NETWORK,
      BuildingType.ASTROPHYSICS,
    ].forEach((type: BuildingType) =>
      buildings.push(BuildingFactory.generateBuilding(type, averageTemperature))
    );

    return buildings;
  }

  private static setupBuildings(averageTemperature: number): Building[] {
    const buildings: Building[] = [];

    [
      BuildingType.CRYSTAL_MINE,
      BuildingType.CRYSTAL_STORAGE,
      BuildingType.DEUTERIUM_SYNTHESIZER,
      BuildingType.DEUTERIUM_TANK,
      BuildingType.METAL_MINE,
      BuildingType.METAL_STORAGE,
      BuildingType.FUSION_REACTOR,
      BuildingType.SOLAR_PLANT,
      BuildingType.SOLAR_SATELLITE,
      BuildingType.ROBOTICS_FACTORY,
      BuildingType.SHIPYARD,
      BuildingType.RESEARCH_LAB,
      BuildingType.ALLIANCE_DEPOT,
      BuildingType.MISSILE_SILO,
      BuildingType.NANITE_FACTORY,
      BuildingType.TERRAFORMER,
    ].forEach((type: BuildingType) =>
      buildings.push(BuildingFactory.generateBuilding(type, averageTemperature))
    );

    return buildings;
  }

  private static setupUnits(): Unit[] {
    const units: Unit[] = [];

    [
      UnitType.SMALL_CARGO_SHIP,
      UnitType.LARGE_CARGO_SHIP,
      UnitType.LIGHT_FIGHTER,
      UnitType.HEAVY_FIGHTER,
      UnitType.CRUISER,
      UnitType.BATTLESHIP,
      UnitType.BATTLE_CRUISER,
      UnitType.BOMBER,
      UnitType.DESTROYER,
      UnitType.DEATH_STAR,
      UnitType.REAPER,
      UnitType.PATHFINDER,
      UnitType.RECYCLER,
      UnitType.ESPIONAGE_PROBE,
      UnitType.SOLAR_SATELLITE,
      UnitType.COLONY_SHIP,
      UnitType.CRAWLER,
    ].forEach((unitType: UnitType) =>
      units.push(UnitFactory.generateUnit(unitType))
    );
    return units;
  }

  private static setupDefence(): Unit[] {
    const units: Unit[] = [];

    [
      UnitType.ROCKET_LAUNCHER,
      UnitType.LIGHT_LASER,
      UnitType.HEAVY_LASER,
      UnitType.ION_CANNON,
      UnitType.GAUSS_CANNON,
      UnitType.PLASMA_CANNON,
      UnitType.SMALL_SHIELD_DOME,
      UnitType.LARGE_SHIELD_DOME,
      UnitType.ANTI_BALLISTIC_MISSILE,
    ].forEach((unitType: UnitType) =>
      units.push(UnitFactory.generateUnit(unitType))
    );
    return units;
  }
}
