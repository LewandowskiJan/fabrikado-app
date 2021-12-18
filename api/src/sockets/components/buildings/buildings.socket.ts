import { Server } from 'socket.io';

import { BuildingEvents } from '@domain/endpoints/buildings/building-events.map';

import { Building } from '@game/building/building';

export function fetchBuildings(
  io: Server<BuildingEvents, BuildingEvents>,
  buildings: Building[]
): void {
  io.emit('read:building');
  io.emit('fetchBuildings', buildings);
}
