import { BuildingType } from '../../../enums/building-type';
import { NextLevelRequirements } from '../requirements/next-level-requirements';
import { ResourceData } from '../resources/resource-data';

export interface BuildingSocketData {
  type: BuildingType;
  level: number;
  name: string;
  miningResource: ResourceData;
  capacity: ResourceData;
  energyConsume: number;
  requirements: NextLevelRequirements;
  requirementsArray: any[];
  nextLevelCosts: ResourceData;
  nextLevelBuildingTime: number;
  onNextLevelUpgrade: boolean;
  upgradingTimeLeft: number;
  baseCost: ResourceData;
  image?: string | undefined;
}
