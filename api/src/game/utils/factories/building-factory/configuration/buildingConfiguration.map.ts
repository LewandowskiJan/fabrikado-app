import { ResourceBuildingRuleConfiguration } from '@src-api/game/utils/models/config-types/rule/resource-building-rule-configuration';

import { BuildingType } from './../../../models/enums/building-type';
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
import {
  armourTechnologyConfiguration,
  astrophysicsConfiguration,
  combustionDriveConfiguration,
  computerTechnologyConfiguration,
  energyTechnologyConfiguration,
  espionageTechnologyConfiguration,
  gravitonTechnologyConfiguration,
  hyperspaceDriveConfiguration,
  hyperspaceTechnologyConfiguration,
  impulseDriveConfiguration,
  intergalacticResearchNetworkConfiguration,
  ionTechnologyConfiguration,
  laserTechnologyConfiguration,
  plasmaTechnologyConfiguration,
  shieldingTechnologyConfiguration,
  weaponTechnologyConfiguration,
} from './technologies.configuration';

export const buildingConfigurationMap: Map<
  BuildingType,
  ResourceBuildingRuleConfiguration
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
  espionageTechnologyConfiguration,
  computerTechnologyConfiguration,
  weaponTechnologyConfiguration,
  shieldingTechnologyConfiguration,
  armourTechnologyConfiguration,
  energyTechnologyConfiguration,
  hyperspaceTechnologyConfiguration,
  combustionDriveConfiguration,
  impulseDriveConfiguration,
  hyperspaceDriveConfiguration,
  laserTechnologyConfiguration,
  ionTechnologyConfiguration,
  plasmaTechnologyConfiguration,
  intergalacticResearchNetworkConfiguration,
  astrophysicsConfiguration,
  gravitonTechnologyConfiguration,
]);
