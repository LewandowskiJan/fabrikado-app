import { BuildingType } from '@src/app/shared/models/buildingType';
import { NextLevelRequirements } from '@src/app/shared/models/next-level-requirements';

export interface BuildingSocketData {
  type: BuildingType;
  name: string;
  improvements: string;
  level: number;
  cost: number;
  buildTime: number;
  weakness: string;
  nextLevelRequirements: NextLevelRequirements;
}
