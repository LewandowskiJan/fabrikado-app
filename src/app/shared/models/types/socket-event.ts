import { BuildingEvents } from '../enums/building-events.map';
import { GameMapEvents } from '../enums/game-map-events.map';
import { PlanetEvents } from '../enums/planet-events.map';
import { PlayerEvents } from '../enums/player-events.map';
import { ResourceEvents } from '../enums/resource-events.map';
import { UnitEvents } from '../enums/unit-events.map';

export type SocketEvent =
  | ResourceEvents
  | PlanetEvents
  | BuildingEvents
  | PlayerEvents
  | UnitEvents
  | GameMapEvents;
