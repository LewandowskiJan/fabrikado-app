import { BuildingEvents } from '@domain/endpoints/buildings/building-events.map';
import { PlanetEvents } from '@domain/endpoints/planet/planet-events.map';

export class ClientEvents {
  ['socket:connection']: any;
  ['socket:disconnecting']: any;
  ['socket:disconnect']: any;
}

export type AllEvents = ClientEvents & BuildingEvents & PlanetEvents;
