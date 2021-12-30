import { BuildingType } from './buildingType';
import { Resource } from './resource';

export interface BuildingRequirement {
  type: BuildingType;
  level: number;
}

export interface Building {
  type: BuildingType;
  level: number;
  name: string;
  miningResource: Resource;
  capacity: Resource;
  energyConsume: number;
  nextLevelBuildingRequirements: BuildingRequirement[];
  nextLevelCosts: Resource;
  nextLevelBuildingTime: number;
  onNextLevelUpgrade: boolean;
  upgradingTimeLeft: number;
  baseCost: Resource;
  image?: string | undefined;
}
