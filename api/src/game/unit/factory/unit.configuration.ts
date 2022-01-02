import { BuildingType } from './../../building/configuration/buildingType';
import { Requirements } from './../../model/requirements/requirements';
import { Resource } from './../../planet/resources/resource';
import { civilUnitConfiguration } from './civil-unit.configuration';
import { defenceUnitConfiguration } from './defence-unit.configuration';
import { offenceUnitConfiguration } from './offence-unit.configuration';
import {
  RapidFireConfiguration,
  UnitStats,
  UnitType,
  UnitUsageType,
} from './unit.abstract';

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
