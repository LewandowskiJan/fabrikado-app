import { BuildingType } from '@src/app/models/buildingType';
import { NextLevelRequirements } from '@src/app/models/next-level-requirements';

export enum BuildingsEventName {
  GET_BUILDINGS = 'GET_BUILDINGS',
  UPGRADE_BUILDING = 'UPGRADE_BUILDING',
  DOWNGRADE_BUILDING = 'DOWNGRADE_BUILDING',
}

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
