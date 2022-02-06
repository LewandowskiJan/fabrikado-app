import { BuildingType } from '@models/enums/building-type';
import { NextLevelRequirements } from '@models/interfaces/game/requirements/next-level-requirements';

export interface BuildingSocketDataForView {
  type: BuildingType;
  name: string;
  improvements: string;
  level: number;
  cost: number;
  buildTime: number;
  weakness: string;
  nextLevelRequirements: NextLevelRequirements;
}
