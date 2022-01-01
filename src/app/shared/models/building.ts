import { Requirements } from '@src/app/game/cosmos/modules/shipyard/model/unit';

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
  requirements: Requirements;
  requirementsArray: any[];
  nextLevelCosts: Resource;
  nextLevelBuildingTime: number;
  onNextLevelUpgrade: boolean;
  upgradingTimeLeft: number;
  baseCost: Resource;
  image?: string | undefined;
}
