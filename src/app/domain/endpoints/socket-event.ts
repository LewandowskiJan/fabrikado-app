import { BuildingEvents } from './buildings/building-events.map';
import { GameMapEvents } from './map/game-map-events.map';
import { PlanetEvents } from './planet/planet-events.map';
import { PlayerEvents } from './player/player-events.map';
import { ResourceEvents } from './resource/resource-events.map';
import { UnitEvents } from './unit/unit-events.map';

export type SocketEvent =
  | ResourceEvents
  | PlanetEvents
  | BuildingEvents
  | PlayerEvents
  | UnitEvents
  | GameMapEvents;
