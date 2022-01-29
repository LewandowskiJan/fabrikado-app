import { UnitType } from './enums/unit-type';

export interface RapidFireConfiguration {
  from: Map<UnitType, number>;
  against: Map<UnitType, number>;
}
