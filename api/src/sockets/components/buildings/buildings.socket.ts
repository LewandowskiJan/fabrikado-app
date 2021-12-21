import { Server } from 'socket.io';

import { BuildingEventsMap } from '@src/sockets/configuration/socket-event.map';

import { BuildingEvents } from './../../../../../src/app/domain/endpoints/buildings/building-events.map';
import { Building } from './../../../game/building/building';

export function fetchBuildings(
  io: Server<BuildingEventsMap, BuildingEventsMap>,
  roomName: string,
  buildings: Building[]
): void {
  io.to(roomName).emit(BuildingEvents.BUILDING_PREPARE);
  io.to(roomName).emit(BuildingEvents.BUILDING_READ, buildings);
}
