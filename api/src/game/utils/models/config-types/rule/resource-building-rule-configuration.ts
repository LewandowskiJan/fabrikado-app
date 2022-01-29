import { BuildingRuleConfiguration } from './building-rule-configuration';
import { ResourceProduction } from './cost.type';

export interface ResourceBuildingRuleConfiguration
  extends BuildingRuleConfiguration {
  upgradeMiningValueFn?: (
    currentLevel: number,
    averagePlanetTemperature?: number
  ) => ResourceProduction;
}
