import { BuildingType } from '@src/app/models/buildingType';

import { Cost } from './cost';

export interface Structure {
  id: string;
  name: string;
  cost: Cost;
  image: string;
  canBuild: boolean;
  description: string;
  buildingTime: string;
  buildingType: BuildingType;
}
