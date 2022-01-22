import { Server } from 'socket.io';

import { Building } from './../../../game/modules/buildings/building';
import { BuildingEventsMap } from './../../../sockets/configuration/socket-event.map';
import { BuildingEvents } from './../../domain/endpoints/buildings/building-events.map';

export function fetchBuildings(
  io: Server<BuildingEventsMap, BuildingEventsMap>,
  roomName: string,
  buildings: Building[]
): void {
  io.to(roomName).emit(BuildingEvents.BUILDING_PREPARE);
  io.to(roomName).emit(BuildingEvents.BUILDING_READ, buildings);
}
