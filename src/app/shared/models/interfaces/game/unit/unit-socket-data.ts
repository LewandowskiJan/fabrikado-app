import { UnitType } from '../../../enums/unit-type';
import { UnitUsageType } from '../../../enums/unit-usage-type';
import { NextLevelRequirements } from '../requirements/next-level-requirements';
import { ResourceData } from '../resources/resource-data';
import { RapidFireConfiguration } from './rapid-fire-configuration';
import { UnitStats } from './unit-stats';

export interface UnitSocketData {
  name: string;
  cost: ResourceData;
  type: UnitType;
  usage: UnitUsageType;
  stats: UnitStats;
  rapidFire: RapidFireConfiguration;
  requirements: NextLevelRequirements;
  rapidFireArray: { against: any[]; from: any[] };
  requirementsArray: any[];
  creatingTime: number;
  creatingTimeLeft: number;
  onCreation: boolean;
  image?: string;
}
