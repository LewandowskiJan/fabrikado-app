import { ResourceBuildingConfiguration } from './../game-configuration.map';
import { Building } from './building';
import { buildingConfigurationMap } from './configuration/buildingConfiguration.map';
import { BuildingType } from './configuration/buildingType';

export const buildingNameMap: Map<BuildingType, string> = new Map([
  [BuildingType.CRYSTAL_MINE, 'Crystal mine'],
  [BuildingType.DEUTERIUM_SYNTHESIZER, 'Deuterium synthesizer'],
  [BuildingType.METAL_MINE, 'Metal mine'],
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
