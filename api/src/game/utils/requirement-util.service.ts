import { Building } from '../modules/buildings/building';
import { Resource } from '../modules/shared/resources/resource';
import { Requirements } from './../model/requirements/requirements';
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
