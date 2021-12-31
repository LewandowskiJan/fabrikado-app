import { Unit } from './../unit';
import { UnitType } from './unit.abstract';
import { UnitConfiguration, unitConfigurationMap } from './unit.configuration';

export class UnitFactory {
  public static unitConfiguration: Map<UnitType, UnitConfiguration> =
    unitConfigurationMap;

  public static generateUnit(unitType: UnitType): Unit {
    const configuration: UnitConfiguration =
      UnitFactory.unitConfiguration.get(unitType);
    return new Unit(unitType, configuration);
  }
}
