import { OnUpdateCost } from '@game/building/building-type/building.abstract';
import { Coordinates } from '@game/coordinates/coordinates';

import { BuildingType } from '../building/configuration/buildingType';
import { Building } from './../building/building';
import { PlanetData } from './factory/planet.factory';
import { PlanetAbstract } from './planet.abstract';
import { Resource } from './resources/resource';
import { ResourcesUtil } from './resources/resources-util';

export class Planet extends PlanetAbstract {
  public playerId: string | undefined;
  public name: string;
  public coordinates: Coordinates;
  public size: number;

  public resources: Resource;
  public resourcesCapacity: Resource;
  public miningForce: Resource;

  public averageTemperature: number;
  public maxTemperature: number;
  public minTemperature: number;

  public satStrength: number;
  public requireSat: number;
  public crystal: number;
  public deuterium: number;
  public deuteriumEfficiency: number;

  public buildings: Building[] = [];

  public onUpgradeBuilding: Building[] = [];

  constructor(planetInitialData: PlanetData) {
    super();

    this.playerId = planetInitialData.playerId;
    this.name = planetInitialData.name;
    this.coordinates = planetInitialData.coordinates;
    this.satStrength = planetInitialData.satStrength;
    this.requireSat = planetInitialData.requireSat;
    this.crystal = planetInitialData.crystal;
    this.deuterium = planetInitialData.deuterium;
    this.deuteriumEfficiency = planetInitialData.deuteriumEfficiency;
    this.averageTemperature = planetInitialData.averageTemperature;
    this.maxTemperature = planetInitialData.maxTemperature;
    this.minTemperature = planetInitialData.minTemperature;
    this.buildings = planetInitialData.buildings;
    this.size = planetInitialData.size;

    this.resourcesCapacity = {
      metal: 10_000,
      crystal: 10_000,
      deuterium: 10_000,
      energy: 1_000_000_000,
    };

    this.resources = {
      metal: 500,
      crystal: 500,
      deuterium: 500,
      energy: 1000,
    };

    this.miningForce = {
      metal: 10,
      crystal: 10,
      deuterium: 10,
      energy: 10,
    };
  }

  public upgradeResources(): void {
    this.resources.crystal = this.checkResourceCapacity('crystal');
    this.resources.metal = this.checkResourceCapacity('metal');
    this.resources.deuterium = this.checkResourceCapacity('deuterium');
    this.resources.energy = this.checkResourceCapacity('energy');
  }

  private checkResourceCapacity(key: string): number {
    if (
      this.resources[key] + Math.ceil(this.miningForce[key]) >=
      this.resourcesCapacity[key]
    ) {
      return this.resourcesCapacity[key];
    } else {
      return this.resources[key] + Math.ceil(this.miningForce[key]);
    }
  }

  public upgradeBuilding(buildingType: BuildingType): void {
    const building: Building = this.buildings.find((building: Building) => {
      return building.type === buildingType && !building.onNextLevelUpgrade;
    });

    if (!building) {
      return;
    }

    const onUpdateCost: OnUpdateCost | undefined = building.upgrade(
      this.resources,
      this.buildings
    );

    if (onUpdateCost) {
      this.resources = ResourcesUtil.decreaseResourceByResource(
        this.resources,
        onUpdateCost.buildingCost
      );
      this.onUpgradeBuilding.push(building);
    }
  }

  public decrementBuildingUpdateTime(): boolean {
    let shouldEmitAfterFinish: boolean;
    this.onUpgradeBuilding.forEach((building: Building) => {
      if (building.decrementUpgradeTime()) {
        shouldEmitAfterFinish = building.finishUpdate();
        this.upgradeMiningForce(building);
        this.upgradeResourceCapacity(building);

        this.onUpgradeBuilding = this.onUpgradeBuilding.filter(
          (currentBuilding: Building) => currentBuilding.type !== building.type
        );
      }
    });
    return shouldEmitAfterFinish;
  }

  private upgradeMiningForce(building: Building): void {
    if (!building.miningResource) {
      return;
    }
    const miningResource: Partial<Resource> = building.miningResource;

    if (miningResource.metal === 0) delete miningResource.metal;
    if (miningResource.crystal === 0) delete miningResource.crystal;
    if (miningResource.deuterium === 0) delete miningResource.deuterium;
    if (miningResource.energy === 0) delete miningResource.energy;

    this.miningForce = { ...this.miningForce, ...miningResource };
  }

  private upgradeResourceCapacity(building: Building): void {
    if (!building.capacity) {
      return;
    }
    const capacityResource: Partial<Resource> = building.capacity;

    if (capacityResource.metal === 0) delete capacityResource.metal;
    if (capacityResource.crystal === 0) delete capacityResource.crystal;
    if (capacityResource.deuterium === 0) delete capacityResource.deuterium;
    if (capacityResource.energy === 0) delete capacityResource.energy;

    this.resourcesCapacity = { ...this.resourcesCapacity, ...capacityResource };
  }

  public getData(): PlanetData {
    return {
      playerId: this.playerId,
      name: this.name,
      coordinates: this.coordinates,
      satStrength: this.satStrength,
      requireSat: this.requireSat,
      crystal: this.crystal,
      size: this.size,
      deuterium: this.deuterium,
      deuteriumEfficiency: this.deuteriumEfficiency,
      averageTemperature: this.averageTemperature,
      maxTemperature: this.maxTemperature,
      minTemperature: this.minTemperature,
      buildings: this.buildings,
    };
  }
}
