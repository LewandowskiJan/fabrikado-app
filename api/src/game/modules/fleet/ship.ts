import { UnitType } from './../../../game/utils/models/enums/unit-type';
import { UnitStats } from './../../../game/utils/models/unit-stats';

export interface Ship {
  name: string;
  type: UnitType;
  stats: UnitStats;
  rapidFire: { against: any[]; from: any[] };
}
