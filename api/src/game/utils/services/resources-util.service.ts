import { Resource } from './../models/resource';

export class ResourcesUtilService {
  public static decreaseResourceByResource(
    resource1: Resource,
    resource2: Resource
  ): Resource {
    const result: Resource = {
      metal: 0,
      crystal: 0,
      deuterium: 0,
      energy: 0,
    };

    Object.entries(resource1).forEach(
      ([key, value]: any) => (result[key] = value - resource2[key])
    );

    return result;
  }

  public static checkResourcesRequirements(
    resource1: Resource,
    resource2: Resource
  ): boolean {
    return Object.entries(resource1).every(([key, value]: any) => {
      return value >= resource2[key];
    });
  }
}
