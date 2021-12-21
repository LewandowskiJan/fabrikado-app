import { BuildingEvents } from '@src/app/domain/endpoints/buildings/building-events.map';

import { PlanetEvents } from '@domain/endpoints/planet/planet-events.map';

import { PlayerEvents } from './player/player-events.map';
import { ResourceEvents } from './resource/resource-events.map';

export type SocketEvent =
  | ResourceEvents
  | PlanetEvents
  | BuildingEvents
  | PlayerEvents;
