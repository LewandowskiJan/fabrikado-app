import { ResourceBuildingConfiguration } from '../../game-configuration.map';
import { BuildingType } from './buildingType';
import {
  fusionReactorConfiguration,
  solarPlantConfiguration,
  solarSatelliteConfiguration,
} from './energy-building.configuration';
import {
  allianceDepotConfiguration,
  missileSiloConfiguration,
  naniteFactoryConfiguration,
  researchLabConfiguration,
  roboticsFactoryConfiguration,
  shipyardConfiguration,
  terraFormerConfiguration,
} from './facilities.configuration';
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
  roboticsFactoryConfiguration,
  shipyardConfiguration,
  researchLabConfiguration,
  allianceDepotConfiguration,
  missileSiloConfiguration,
  naniteFactoryConfiguration,
  terraFormerConfiguration,
]);
