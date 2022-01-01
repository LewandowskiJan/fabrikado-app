import { BuildingEvents } from './../../../../src/app/domain/endpoints/buildings/building-events.map';
import { PlanetEvents } from './../../../../src/app/domain/endpoints/planet/planet-events.map';
import { PlayerEvents } from './../../../../src/app/domain/endpoints/player/player-events.map';
import { ResourceEvents } from './../../../../src/app/domain/endpoints/resource/resource-events.map';
import { UnitEvents } from './../../../../src/app/domain/endpoints/unit/unit-events.map';

export enum ClientEvents {
  SOCKET_CONNECTION = 'connection',
  SOCKET_DISCONNECTING = 'disconnecting',
  SOCKET_DISCONNECT = 'disconnect',
}
export class ClientEventsMap {
  [ClientEvents.SOCKET_CONNECTION]: any;
  [ClientEvents.SOCKET_DISCONNECTING]: any;
  [ClientEvents.SOCKET_DISCONNECT]: any;
}

export class BuildingEventsMap {
  [BuildingEvents.BUILDING_READ]: any;
  [BuildingEvents.BUILDING_UPDATE]: any;
  [BuildingEvents.BUILDING_DELETE]: any;
  [BuildingEvents.BUILDING_ADD]: any;
  [BuildingEvents.BUILDING_PREPARE]: any;
}

export class PlanetEventsMap {
  [PlanetEvents.PLANET_READ]: any;
  [PlanetEvents.PLANET_UPDATE]: any;
  [PlanetEvents.PLANET_DELETE]: any;
  [PlanetEvents.PLANET_ADD]: any;
  [PlanetEvents.PLANET_PREPARE]: any;
  [PlanetEvents.PLANET_GET_NAMES]: any;
}

export class ResourceEventsMap {
  [ResourceEvents.RESOURCE_READ]: any;
  [ResourceEvents.RESOURCE_UPDATE]: any;
  [ResourceEvents.RESOURCE_DELETE]: any;
  [ResourceEvents.RESOURCE_ADD]: any;
  [ResourceEvents.RESOURCE_PREPARE]: any;
}

export class PlayerEventsMap {
  [PlayerEvents.PLAYER_READ]: any;
  [PlayerEvents.PLAYER_UPDATE]: any;
  [PlayerEvents.PLAYER_DELETE]: any;
  [PlayerEvents.PLAYER_ADD]: any;
  [PlayerEvents.PLAYER_PREPARE]: any;
}

export class UnitEventsMap {
  [UnitEvents.UNIT_READ]: any;
  [UnitEvents.UNIT_UPDATE]: any;
  [UnitEvents.UNIT_DELETE]: any;
  [UnitEvents.UNIT_ADD]: any;
  [UnitEvents.UNIT_PREPARE]: any;
}

export type AllEvents = ClientEventsMap &
  BuildingEventsMap &
  PlanetEventsMap &
  ResourceEventsMap &
  UnitEventsMap &
  PlayerEventsMap;
