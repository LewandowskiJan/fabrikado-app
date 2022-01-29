import { PlanetAbstract } from './../../../../game/utils/factories/planet-factory/planet.abstract';
import { Coordinates } from './../../../../game/utils/models/coordinates';
import { CelestialBodyType } from './../../../../game/utils/models/enums/celestial-body-type';
import { UnitType } from './../../../../game/utils/models/enums/unit-type';
import { SolarSystemMapPlanetData } from './../../../../game/utils/models/map-data/solar-system-map-data';
import { OnUnitCreateCost } from './../../../../game/utils/models/on-unit-create-cost';
import { OnUpdateCost } from './../../../../game/utils/models/on-update-cost';
import { PlanetData } from './../../../../game/utils/models/planet-data';
import { Resource } from './../../../../game/utils/models/resource';
import { ResourcesUtilService } from './../../../../game/utils/services/resources-util.service';
import { BuildingType } from './../../../utils/models/enums/building-type';
import { Building } from './../../buildings/building';
import { Fleet } from './../../fleet/fleet';
import { FleetFactory } from './../../fleet/fleet.factory';
import { Unit } from './../../units/unit';

export class Planet extends PlanetAbstract {
  public playerId: string | undefined;
  public name: string;
  public celestialBodyType: CelestialBodyType;
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
  public technologies: Building[] = [];
  public defence: Unit[] = [];
  public units: Unit[] = [];

  public onUpgradeBuilding: Building[] = [];
  public onCreatingUnit: Unit[] = [];
  public fleet: Fleet;
  public solarSystemMapPlanetData: SolarSystemMapPlanetData;

  constructor(planetInitialData: PlanetData) {
    super();

    this.playerId = planetInitialData.playerId;
    this.celestialBodyType = planetInitialData.celestialBodyType;
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
    this.defence = planetInitialData.defence;
    this.technologies = planetInitialData.technologies;
    this.units = planetInitialData.units;
    this.size = planetInitialData.size;
    this.solarSystemMapPlanetData = planetInitialData.solarSystemMapPlanetData;

    this.resourcesCapacity = {
      metal: 10_000,
      crystal: 10_000,
      deuterium: 10_000,
      energy: 1_000_000_000,
    };

    this.resources = {
      metal: 7_500,
      crystal: 7_500,
      deuterium: 7_500,
      energy: 10_000,
    };

    this.miningForce = {
      metal: 100,
      crystal: 100,
      deuterium: 100,
      energy: 100,
    };
  }

  public upgradeResources(): void {
    this.resources.crystal = this.checkResourceCapacity('crystal');
    this.resources.metal = this.checkResourceCapacity('metal');
    this.resources.deuterium = this.checkResourceCapacity('deuterium');
    this.resources.energy = this.checkResourceCapacity('energy');
  }

  public createUnit(unitType: UnitType): void {
    const unit: Unit = [...this.units, ...this.defence].find(
      (currentUnit: Unit) => {
        return currentUnit.type === unitType && !currentUnit.onCreation;
      }
    );

    if (!unit) {
      return;
    }

    const onUnitCreateCost: OnUnitCreateCost | undefined = unit.create(
      this.resources,
      unit,
      [...this.buildings, ...this.technologies]
    );

    if (onUnitCreateCost) {
      this.resources = ResourcesUtilService.decreaseResourceByResource(
        this.resources,
        onUnitCreateCost.unitCreationCost
      );

      this.onCreatingUnit.push(unit);
    }
  }

  public upgradeBuilding(buildingType: BuildingType): void {
    const building: Building = [...this.buildings, ...this.technologies].find(
      (building: Building) => {
        return building.type === buildingType && !building.onNextLevelUpgrade;
      }
    );

    if (!building) {
      return;
    }

    const onUpdateCost: OnUpdateCost | undefined = building.upgrade(
      building,
      this.resources,
      [...this.buildings, ...this.technologies]
    );

    if (onUpdateCost) {
      this.resources = ResourcesUtilService.decreaseResourceByResource(
        this.resources,
        onUpdateCost.buildingCost
      );
      this.onUpgradeBuilding.push(building);
    }
  }

  public decrementTimeOfBuildingUpdate(): boolean {
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

  public decrementTimeOfUnitCreation(): boolean {
    let shouldEmitAfterFinish: boolean;
    this.onCreatingUnit.forEach((unit: Unit) => {
      if (unit.decrementCreateTime()) {
        unit.finishCreation();
        if (this.fleet) {
          this.fleet.addShip(unit.type, 1);
        } else {
          this.fleet = FleetFactory.createFleet([
            {
              numberOfUnit: 1,
              unitType: unit.type,
            },
          ]);
        }

        this.onCreatingUnit = this.onCreatingUnit.filter(
          (currentUnit: Unit) => currentUnit.type !== unit.type
        );
        shouldEmitAfterFinish = true;
      }
    });
    return shouldEmitAfterFinish;
  }

  public getData(): PlanetData {
    return {
      celestialBodyType: this.celestialBodyType,
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
      technologies: this.technologies,
      units: this.units,
      fleet: this.fleet,
      defence: this.defence,
      solarSystemMapPlanetData: this.solarSystemMapPlanetData,
    };
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
}
