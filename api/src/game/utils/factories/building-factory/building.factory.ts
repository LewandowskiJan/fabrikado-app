import { Building } from './../../../../game/modules/buildings/building';
import { BuildingOptions } from './../../models/config-types/building-options';
import { ResourceBuildingRuleConfiguration } from './../../models/config-types/rule/resource-building-rule-configuration';
import { BuildingType } from './../../models/enums/building-type';
import { buildingConfigurationMap } from './configuration/buildingConfiguration.map';
import { buildingNameMap } from './configuration/buildingName.map';
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

    const resourceBuildingRuleConfiguration: ResourceBuildingRuleConfiguration =
      buildingConfigurationMap.get(buildingOptions.type);

    return new Building(buildingOptions, resourceBuildingRuleConfiguration);
  }
}
