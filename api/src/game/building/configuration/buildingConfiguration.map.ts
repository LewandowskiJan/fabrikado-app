import { ResourceBuildingConfiguration } from '../../game-configuration.map';
import { BuildingType } from './buildingType';
import {
  fusionReactorConfiguration,
  solarPlantConfiguration,
  solarSatelliteConfiguration,
} from './energy-building.configuration';
import {
  crystalMineConfiguration,
  deuteriumSynthesizerConfiguration,
  metalMineConfiguration,
} from './mines.configuration';
import {
  crystalStorageConfiguration,
  deuteriumTankConfiguration,
  metalStorageConfiguration,
} from './storage-building.configuration';

export const buildingConfigurationMap: Map<
  BuildingType,
  ResourceBuildingConfiguration
> = new Map([
  crystalMineConfiguration,
  crystalStorageConfiguration,
  metalMineConfiguration,
  metalStorageConfiguration,
  deuteriumSynthesizerConfiguration,
  deuteriumTankConfiguration,
  fusionReactorConfiguration,
  solarPlantConfiguration,
  solarSatelliteConfiguration,
]);
