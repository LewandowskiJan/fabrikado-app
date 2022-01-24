import { ResourceBuildingConfiguration } from './../../game-configuration.map';
import { Building } from './building';
import { buildingConfigurationMap } from './configuration/buildingConfiguration.map';
import { BuildingType } from './configuration/buildingType';

export const buildingNameMap: Map<BuildingType, string> = new Map([
  [BuildingType.CRYSTAL_MINE, 'Crystal mine'],
  [BuildingType.CRYSTAL_STORAGE, 'Crystal storage'],
  [BuildingType.METAL_MINE, 'Metal mine'],
  [BuildingType.METAL_STORAGE, 'Metal storage'],
  [BuildingType.DEUTERIUM_SYNTHESIZER, 'Deuterium synthesizer'],
  [BuildingType.DEUTERIUM_TANK, 'Deuterium tank'],
  [BuildingType.FUSION_REACTOR, 'Fusion reactor'],
  [BuildingType.SOLAR_PLANT, 'Solar plant'],
  [BuildingType.SOLAR_SATELLITE, 'Solar satellite'],
  [BuildingType.ROBOTICS_FACTORY, 'Robotics factory'],
  [BuildingType.SHIPYARD, 'Shipyard'],
  [BuildingType.RESEARCH_LAB, 'Research lab'],
  [BuildingType.ALLIANCE_DEPOT, 'Alliance depot'],
  [BuildingType.MISSILE_SILO, 'Missile silo'],
  [BuildingType.NANITE_FACTORY, 'Nanite factory'],
  [BuildingType.TERRAFORMER, 'Terraformer'],
  [BuildingType.COMBUSTION_DRIVE, 'COMBUSTION_DRIVE'],
  [BuildingType.IMPULSE_DRIVE, 'Impulse drive'],
  [BuildingType.ARMOUR_TECHNOLOGY, 'Armour technology'],
  [BuildingType.ION_TECHNOLOGY, 'Ion technology'],
  [BuildingType.HYPERSPACE_TECHNOLOGY, 'Hyperspace technology'],
  [BuildingType.HYPERSPACE_DRIVE, 'Hyperspace drive'],
  [BuildingType.LASER_TECHNOLOGY, 'Laser technology'],
  [BuildingType.PLASMA_TECHNOLOGY, 'Plasma technology'],
  [BuildingType.GRAVITON_TECHNOLOGY, 'Graviton technology'],
  [BuildingType.SHIELDING_TECHNOLOGY, 'Shielding technology'],
  [BuildingType.ESPIONAGE_TECHNOLOGY, 'Espionage technology'],
  [BuildingType.COMPUTER_TECHNOLOGY, 'Computer technology'],
  [BuildingType.WEAPON_TECHNOLOGY, 'Weapon technology'],
  [BuildingType.ENERGY_TECHNOLOGY, 'Energy technology'],
  [BuildingType.INTERGALACTIC_RESEARCH_NETWORK, 'Intergalactic technology'],
  [BuildingType.ASTROPHYSICS, 'Astrophysics'],
]);

export interface BuildingOptions {
  type: BuildingType;
  level: number;
  name: string;
  averageTemperature: number;
}

export class BuildingFactory {
  public static generateBuilding(
    type: BuildingType,
    averageTemperature: number
  ): Building {
    const buildingOptions: BuildingOptions = {
      type,
      level: 0,
      name: buildingNameMap.get(type),
      averageTemperature,
    };

    const resourceBuildingConfiguration: ResourceBuildingConfiguration =
      buildingConfigurationMap.get(buildingOptions.type);

    return new Building(buildingOptions, resourceBuildingConfiguration);
  }
}