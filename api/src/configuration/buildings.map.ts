import { Building } from '../models/class/building';
import { BuildingType } from './../models/interfaces/buildingType';

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
