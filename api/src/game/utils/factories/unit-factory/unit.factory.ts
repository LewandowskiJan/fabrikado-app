import { Unit } from './../../../../game/modules/units/unit';
import {
  UnitConfiguration,
  unitConfigurationMap,
} from './../../../utils/factories/unit-factory/configuration/unit.configuration';
import { UnitType } from './../../models/enums/unit-type';
import { unitNameMap } from './configuration/unit-name.map';

export class UnitFactory {
  public static unitConfiguration: Map<UnitType, UnitConfiguration> =
    unitConfigurationMap;

  public static generateUnit(unitType: UnitType): Unit {
    const configuration: UnitConfiguration =
      UnitFactory.unitConfiguration.get(unitType);

    return new Unit(unitNameMap.get(unitType), unitType, configuration);
  }
}
