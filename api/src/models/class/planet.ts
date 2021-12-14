import { BuildingType } from './../interfaces/buildingType';
import { buildingsMap } from './../../configuration/buildings.map';
import { Building } from './building';
import { Fleet } from '../interfaces/fleet';
import { FleetType } from '../interfaces/fleet-type';
import { Resource } from '../interfaces/resource';

export type Planets = Planet[];

export class Planet {
  public resources: Resource = {
    iron: 0,
    energy: 0,
  };
  public resourcesIncreaseValue: any = {
    iron: 10,
    energy: 40,
  };
  public fleet: Map<FleetType, Fleet>;
  public buildings: Map<BuildingType, Building>;
  public data: any;

  constructor() {
    this.buildings = buildingsMap;
  }

  public update(): void {
    if (this.resources) {
      this.resources.energy += this.resourcesIncreaseValue.energy;
      this.resources.iron += this.resourcesIncreaseValue.iron;
    }
  }

  public build(type: BuildingType): void {
    const building: Building = this.buildings.get(type);
    building.level++;
    this.resourcesIncreaseValue.iron += 20;
  }
}
