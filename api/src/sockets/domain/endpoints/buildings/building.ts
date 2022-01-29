import { BuildingType } from './../../../../game/modules/buildings/configuration/buildingType';
import { NextLevelRequirements } from './../../../../game/utils/models/next-level-requirements';

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
