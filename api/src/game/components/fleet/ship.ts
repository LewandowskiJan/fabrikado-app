import { UnitStats, UnitType } from '../unit/factory/unit.abstract';

export interface Ship {
  name: string;
  type: UnitType;
  stats: UnitStats;
  rapidFire: { against: any[]; from: any[] };
}
