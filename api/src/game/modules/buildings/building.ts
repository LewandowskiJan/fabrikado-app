import { BuildingOptions } from './../../../game/utils/models/config-types/building-options';
import { ResourceBuildingRuleConfiguration } from './../../../game/utils/models/config-types/rule/resource-building-rule-configuration';
import { BuildingAbstract } from './../../utils/factories/building-factory/building.abstract';

export class Building extends BuildingAbstract {
  constructor(
    buildingOption: BuildingOptions,
    resourceBuildingRuleConfiguration: ResourceBuildingRuleConfiguration
  ) {
    super(buildingOption, resourceBuildingRuleConfiguration);
  }
}
