import { Requirements } from '../../../model/requirements/requirements';
import { RequirementUtilService } from '../../../utils/requirement-util.service';
import { Building } from '../../buildings/building';
import { BuildingType } from '../../buildings/configuration/buildingType';
import { Resource } from '../../shared/resources/resource';
import { Unit } from './../unit';
import { UnitConfiguration } from './unit.configuration';

export enum UnitType {
  SMALL_CARGO_SHIP = 'SMALL_CARGO_SHIP',
  LARGE_CARGO_SHIP = 'LARGE_CARGO_SHIP',
  LIGHT_FIGHTER = 'LIGHT_FIGHTER',
  HEAVY_FIGHTER = 'HEAVY_FIGHTER',
  CRUISER = 'CRUISER',
  BATTLESHIP = 'BATTLESHIP',
  BATTLE_CRUISER = 'BATTLE_CRUISER',
  BOMBER = 'BOMBER',
  DESTROYER = 'DESTROYER',
  DEATH_STAR = 'DEATH_STAR',
  REAPER = 'REAPER',
  PATHFINDER = 'PATHFINDER',
  RECYCLER = 'RECYCLER',
  ESPIONAGE_PROBE = 'ESPIONAGE_PROBE',
  SOLAR_SATELLITE = 'SOLAR_SATELLITE',
  COLONY_SHIP = 'COLONY_SHIP',
  CRAWLER = 'CRAWLER',
  // todo: migrate to defence building
  ROCKET_LAUNCHER = 'ROCKET_LAUNCHER',
  LIGHT_LASER = 'LIGHT_LASER',
  HEAVY_LASER = 'HEAVY_LASER',
  ION_CANNON = 'ION_CANNON',
  GAUSS_CANNON = 'GAUSS_CANNON',
  PLASMA_CANNON = 'PLASMA_CANNON',
  SMALL_SHIELD_DOME = 'SMALL_SHIELD_DOME',
  LARGE_SHIELD_DOME = 'LARGE_SHIELD_DOME',
  ANTI_BALLISTIC_MISSILE = 'ANTI_BALLISTIC_MISSILE',
}

export enum UnitUsageType {
  COMBAT = 'COMBAT',
  CIVIL = 'CIVIL',
}

export interface UnitStats {
  structuralIntegrity: number;
  shieldStrength: number;
  attackStrength: number;
  speed: number;
  cargoCapacity: number;
  fuelUsage: number;
}

export interface RapidFireConfiguration {
  from: Map<UnitType, number>;
  against: Map<UnitType, number>;
}

export interface OnUnitCreateCost {
  unitCreationCost: Resource;
  unitCreationTime: number;
}

export abstract class UnitAbstract {
  public name: string;
  public cost: Resource;
  public type: UnitType;
  public usage: UnitUsageType;

  public stats: UnitStats;
  public rapidFire: RapidFireConfiguration;
  public requirements: Requirements;
  public rapidFireArray: { against: any[]; from: any[] };
  public requirementsArray: any[];
  public creatingTime: number = 3;
  public creatingTimeLeft: number = 0;
  public onCreation: boolean = false;

  constructor(
    name: string,
    unitType: UnitType,
    unitConfiguration: UnitConfiguration
  ) {
    this.name = name;
    this.type = unitType;
    this.cost = unitConfiguration.cost;
    this.usage = unitConfiguration.usage;
    this.stats = unitConfiguration.stats;
    this.rapidFire = unitConfiguration.rapidFire;
    this.requirements = unitConfiguration.requirements;
    this.setupRapidFireArray();
    this.setupRequirementArray();
  }

  public create(
    currentResources: Resource,
    currentUnit: Unit,
    currentPlanetBuildings: Building[]
  ): OnUnitCreateCost {
    console.log(
      this.canCreate(currentUnit, currentResources, currentPlanetBuildings)
    );
    if (this.onCreation) {
      return undefined;
    } else if (
      this.canCreate(currentUnit, currentResources, currentPlanetBuildings)
    ) {
      this.creatingTimeLeft = this.creatingTime;
      this.onCreation = true;

      return {
        unitCreationCost: currentUnit.cost,
        unitCreationTime: this.creatingTime,
      };
    } else {
      return undefined;
    }
  }

  public decrementCreateTime(): boolean {
    if (this.onCreation && this.creatingTimeLeft === 0) {
      return true;
    } else if (this.creatingTimeLeft > 0) {
      this.creatingTimeLeft--;
      return false;
    } else {
      return false;
    }
  }

  public finishCreation(): void {
    this.creatingTimeLeft = 3;
    this.onCreation = false;
  }

  private canCreate(
    currentUnit: Unit,
    currentResources: Resource,
    currentPlanetBuildings: Building[]
  ): boolean {
    return (
      RequirementUtilService.areRequirementsFulfilled(
        currentUnit.requirements,
        currentPlanetBuildings
      ) &&
      RequirementUtilService.haveEnoughResources(
        currentUnit.cost,
        currentResources
      )
    );
  }

  private setupRequirementArray(): void {
    const array: any[] = [];
    this.requirements.forEach((value: number, key: BuildingType) => {
      array.push({ [key]: value });
    });

    this.requirementsArray = array;
  }

  private setupRapidFireArray(): void {
    const against: any[] = [];
    const from: any[] = [];
    this.rapidFire.against.forEach((value: number, key: UnitType) => {
      against.push({ [key]: value });
    });
    this.rapidFire.from.forEach((value: number, key: UnitType) => {
      from.push({ [key]: value });
    });
    this.rapidFireArray = {
      from: from,
      against: against,
    };
  }
}
