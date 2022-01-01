import { UnitStats, UnitType } from './factory/unit.abstract';

export class Ship {
  public name: string;
  public type: UnitType;
  public stats: UnitStats;
  public rapidFire: { against: any[]; from: any[] };

  constructor(
    name: string,
    type: UnitType,
    stats: UnitStats,
    rapidFire: { against: any[]; from: any[] }
  ) {
    this.name = name;
    this.type = type;
    this.stats = stats;
    this.rapidFire = rapidFire;
  }
}
