import { Building } from './../../../game/modules/buildings/building';
import { Resource } from './resource';

export interface NextLevelRequirements {
  resource: Resource;
  haveBuildings: Building[];
}
