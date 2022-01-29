import { BuildingType } from './../../enums/building-type';
import { PlanetRuleConfiguration } from './planet-rule-configuration';
import { ResourceBuildingRuleConfiguration } from './resource-building-rule-configuration';

export interface GameRuleConfiguration {
  planetRuleConfiguration: PlanetRuleConfiguration;
  // galaxyRuleConfiguration: GalaxyRuleConfiguration;
  // universeRuleConfiguration: UniverseRuleConfiguration;
  buildingConfiguration: Map<BuildingType, ResourceBuildingRuleConfiguration>;
}
