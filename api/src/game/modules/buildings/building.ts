import { ResourceBuildingConfiguration } from './../../../game/game-configuration.map';
import { BuildingOptions } from './building.factory';
import { BuildingAbstract } from './building-type/building.abstract';

export class Building extends BuildingAbstract {
  constructor(
    buildingOption: BuildingOptions,
    resourceBuildingConfiguration: ResourceBuildingConfiguration
  ) {
    super(buildingOption, resourceBuildingConfiguration);
  }
}
