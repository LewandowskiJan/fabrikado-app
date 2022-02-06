import { BuildingSocketData } from '../building/building-socket-data';
import { ResourceData } from '../resources/resource-data';

export interface NextLevelRequirements {
  resource: ResourceData;
  haveBuildings: BuildingSocketData[];
}
