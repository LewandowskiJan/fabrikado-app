import { UnitType } from './../../../models/enums/unit-type';
import { UnitUsageType } from './../../../models/enums/unit-usage-type';
import { RapidFireConfiguration } from './../../../models/rapid-fire-configuration';
import { Requirements } from './../../../models/requirements';
import { Resource } from './../../../models/resource';
import { UnitStats } from './../../../models/unit-stats';
import { civilUnitConfiguration } from './civil-unit.configuration';
import { defenceUnitConfiguration } from './defence-unit.configuration';
import { offenceUnitConfiguration } from './offence-unit.configuration';

export interface UnitConfiguration {
  cost: Resource;
  usage: UnitUsageType;
  stats: UnitStats;
  rapidFire: RapidFireConfiguration;
  requirements: Requirements;
}

export const unitConfigurationMap: Map<UnitType, UnitConfiguration> = new Map([
  ...civilUnitConfiguration,
  ...offenceUnitConfiguration,
  ...defenceUnitConfiguration,
]);
