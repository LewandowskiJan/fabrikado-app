import { Planet } from './../../../models/class/planet';
import { BuildingType } from './../../../models/interfaces/buildingType';
import { Building } from '@src/models/class/building';
import { Server } from 'socket.io';

export function fetchBuildings(
  io: Server,
  buildings: Map<BuildingType, Building>
): void {
  io.emit('fetchBuildings', buildings);
}

export function build(planet: Planet, buildingType: BuildingType): void {
  planet.build(buildingType);
}
