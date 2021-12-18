import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { BuildingType } from '@src/app/models/buildingType';

import { Structure } from '../models/structure';
@Injectable({
  providedIn: 'root',
})
export class ApiStructureService {
  public getData(): Observable<Structure[]> {
    return of([
      {
        id: 'BMM',
        name: 'Metal Mine',
        cost: { m: 1, k: 2, d: 3 },
        image: 'structure',
        canBuild: true,
        description: `A Metal Mine is a building that produces Metal.
        Metal is one of the 3 basic resources required by all emerging
        and established empires for the construction of structures and ships,
        and researching.`,
        buildingTime: '25',
        buildingType: BuildingType.METAL_MINE,
      },
      {
        id: 'BCM',
        name: 'Crystal Mine',
        cost: { m: 1, k: 2, d: 3 },
        image: 'structure2',
        canBuild: true,
        description: `A Crystal Mine is a building that mines raw crystals.
        Crystals are one of the three basic resources that are required to progress in the game.`,
        buildingTime: '30',
        buildingType: BuildingType.CRYSTAL_MINE,
      },
      {
        id: 'BDS',
        name: 'Deuterium Synthesizer',
        cost: { m: 1, k: 2, d: 3 },
        image: 'structure4',
        canBuild: true,
        description: 'The Deuterium Synthesizer is used to produce deuterium.',
        buildingTime: '40',
        buildingType: BuildingType.DEUTERIUM_SYNTHESIZER,
      },
      {
        id: 'BS',
        name: 'Shipyard',
        cost: { m: 1, k: 2, d: 3 },
        image: 'structure5',
        canBuild: false,
        description: `The Shipyard is responsible for constructing
        all ships and defensive structures.`,
        buildingTime: '55',
        buildingType: BuildingType.CRYSTAL_MINE,
      },
      {
        id: 'BSP',
        name: 'Solar Plant',
        cost: { m: 1, k: 2, d: 3 },
        image: 'structure2',
        canBuild: true,
        description: `A Solar Plant is a building used to generate energy
         to power your Metal Mine, Crystal Mine, and Deuterium Synthesizer.`,
        buildingTime: '80',
        buildingType: BuildingType.METAL_MINE,
      },
    ]).pipe(take(1));
  }
}
