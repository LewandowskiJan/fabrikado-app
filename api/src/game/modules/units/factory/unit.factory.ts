import { Unit } from './../unit';
import { UnitType } from './unit.abstract';
import { UnitConfiguration, unitConfigurationMap } from './unit.configuration';

export const buildingNameMap: Map<UnitType, string> = new Map([
  [UnitType.SMALL_CARGO_SHIP, 'Small cargo ship'],
  [UnitType.LARGE_CARGO_SHIP, 'Large cargo ship'],
  [UnitType.LIGHT_FIGHTER, 'Light fighter'],
  [UnitType.HEAVY_FIGHTER, 'Heavy fighter'],
  [UnitType.CRUISER, 'Cruiser'],
  [UnitType.BATTLESHIP, 'Battleship'],
  [UnitType.BATTLE_CRUISER, 'Battle cruiser'],
  [UnitType.BOMBER, 'Bomber'],
  [UnitType.DESTROYER, 'Destroyer'],
  [UnitType.DEATH_STAR, 'Death star'],
  [UnitType.REAPER, 'Reaper'],
  [UnitType.PATHFINDER, 'Pathfinder'],
  [UnitType.RECYCLER, 'Recycler'],
  [UnitType.ESPIONAGE_PROBE, 'Espionage probe'],
  [UnitType.SOLAR_SATELLITE, 'Solar satellite'],
  [UnitType.COLONY_SHIP, 'Colony ship'],
  [UnitType.CRAWLER, 'Crawler'],
  [UnitType.ROCKET_LAUNCHER, 'Rocket launcher'],
  [UnitType.LIGHT_LASER, 'Light laser'],
  [UnitType.HEAVY_LASER, 'Heavy laser'],
  [UnitType.ION_CANNON, 'Ion cannon'],
  [UnitType.GAUSS_CANNON, 'Gauss cannon'],
  [UnitType.PLASMA_CANNON, 'Plasma cannon'],
  [UnitType.SMALL_SHIELD_DOME, 'Small shield dome'],
  [UnitType.LARGE_SHIELD_DOME, 'Large shield dome'],
  [UnitType.ANTI_BALLISTIC_MISSILE, 'Anti-ballistic missile'],
]);

export class UnitFactory {
  public static unitConfiguration: Map<UnitType, UnitConfiguration> =
    unitConfigurationMap;

  public static generateUnit(unitType: UnitType): Unit {
    const configuration: UnitConfiguration =
      UnitFactory.unitConfiguration.get(unitType);

    return new Unit(buildingNameMap.get(unitType), unitType, configuration);
  }
}
