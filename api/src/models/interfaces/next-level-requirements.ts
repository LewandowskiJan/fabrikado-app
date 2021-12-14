import { Building } from '../class/building';
import { Resource } from './resource';

export interface NextLevelRequirements {
  resource: Resource;
  haveBuildings: Building[];
}
