import { BuildingType } from '@game/planet/building/buildingType';
import { Building } from '../sockets/components/buildings/building';

export const buildingsMap: Map<BuildingType, Building> = new Map([
  [BuildingType.CRYSTAL_MINE, new Building(BuildingType.CRYSTAL_MINE)],
  [
    BuildingType.DEUTERIUM_SYNTHESIZER,
    new Building(BuildingType.DEUTERIUM_SYNTHESIZER),
  ],
  [BuildingType.METAL_MINE, new Building(BuildingType.METAL_MINE)],
  [BuildingType.SHIPYARD, new Building(BuildingType.SHIPYARD)],
  [BuildingType.SOLAR_PLANT, new Building(BuildingType.SOLAR_PLANT)],
]);
