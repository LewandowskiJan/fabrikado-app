import { BuildingType } from './../interfaces/buildingType';
import { NextLevelRequirements } from '../interfaces/next-level-requirements';

export interface BuildingOption {
  improvements: string;
  level: number;
  cost: number;
  buildTime: number;
  weakness: string;
}

const defaultOption: BuildingOption = {
  improvements: '',
  level: 0,
  cost: 1000,
  buildTime: 1000,
  weakness: '',
};

export class Building {
  public type: BuildingType;
  public name: string = '';
  public improvements: string;
  public level: number = 0;
  public cost: number = 1000;
  public buildTime: number;
  public weakness: string;
  public nextLevelRequirements: NextLevelRequirements | undefined;

  constructor(
    buildingType: BuildingType,
    options: BuildingOption = defaultOption
  ) {
    this.type = buildingType;
    this.improvements = options.improvements;
    this.level = options.level;
    this.cost = options.cost;
    this.buildTime = options.buildTime;
    this.weakness = options.weakness;
  }
}
