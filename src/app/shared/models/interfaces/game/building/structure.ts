import { BuildingType } from '../../../enums/building-type';
import { Cost } from '../../common/cost';

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
