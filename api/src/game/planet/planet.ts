import { Coordinates } from '@game/coordinates/coordinates';

import { Building } from './building/building';
import { BuildingType } from './building/buildingType';
import { PlanetData } from './factory/planet.factory';
import { PlanetAbstract } from './planet.abstract';
import { Resource } from './resources/resource';

export class Planet extends PlanetAbstract {
  public playerId: string;
  public name: string;
  public coordinates: Coordinates;
  public size: number;

  public resources: Resource;
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

    this.resources = {
      metal: 0,
      crystal: 0,
      deuterium: 0,
      energy: 0,
    };

    this.miningForce = {
      metal: 10,
      crystal: 10,
      deuterium: 10,
      energy: 10,
    };
  }

  public upgradeResources(): void {
    this.resources.crystal += this.miningForce.crystal;
    this.resources.metal += this.miningForce.metal;
    this.resources.deuterium += this.miningForce.deuterium;
    this.resources.energy += this.miningForce.energy;
  }

  public upgradeBuilding(buildingType: BuildingType): void {
    this.buildings
      .find((building: Building) => {
        return building.type === buildingType;
      })
      .upgrade();
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
