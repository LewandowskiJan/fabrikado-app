import { BuildingType } from './buildingType';
import { NextLevelRequirements } from './next-level-requirements';

export interface Building {
  type: BuildingType;
  name: string;
  improvements: string;
  level: number;
  cost: number;
  buildTime: number;
  weakness: string;
  nextLevelRequirements: NextLevelRequirements;
}
