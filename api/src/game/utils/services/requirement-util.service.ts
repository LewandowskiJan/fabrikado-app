import { Building } from './../../modules/buildings/building';
import { Requirements } from './../models/requirements';
import { Resource } from './../models/resource';
import { ResourcesUtilService } from './resources-util.service';

export class RequirementUtilService {
  public static haveEnoughResources(
    currentResources: Resource,
    cost: Resource
  ): boolean {
    ResourcesUtilService.checkResourcesRequirements(currentResources, cost);
    return true;
  }

  public static areRequirementsFulfilled(
    currentRequirements: Requirements,
    currentPlanetBuildings: Building[]
  ): boolean {
    return currentPlanetBuildings.every((building: Building) => {
      if (!currentRequirements.has(building.type)) return true;
      return building.level >= currentRequirements.get(building.type);
    });
  }
}
