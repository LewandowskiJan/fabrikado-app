import { Building } from './../../../../game/modules/buildings/building';
import { Unit } from './../../../../game/modules/units/unit';
import { BuildingType } from './../../models/enums/building-type';
import { UnitType } from './../../models/enums/unit-type';
import { UnitUsageType } from './../../models/enums/unit-usage-type';
import { OnUnitCreateCost } from './../../models/on-unit-create-cost';
import { RapidFireConfiguration } from './../../models/rapid-fire-configuration';
import { Requirements } from './../../models/requirements';
import { Resource } from './../../models/resource';
import { UnitStats } from './../../models/unit-stats';
import { RequirementUtilService } from './../../services/requirement-util.service';
import { UnitConfiguration } from './configuration/unit.configuration';

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