import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';
import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';
import { Resource } from '@src/app/shared/models/resource';
import { NumberDisplayPipe } from '@src/app/shared/pipes/number-display/number-display.pipe';

export interface ResourceElement {
  value: string | number;
  capacity: string | number;
}
export interface MappedResource {
  metal: ResourceElement;
  deuterium: ResourceElement;
  energy: ResourceElement;
  crystal: ResourceElement;
}
@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(
    private planetSocketService: PlanetSocketService,
    private numberDisplayPipe: NumberDisplayPipe
  ) {}

  public resourceWithCapacityListener(): Observable<MappedResource> {
    return combineLatest([
      this.resourceListener(),
      this.capacityListener(),
    ]).pipe(
      map(([resource, capacity]: [Resource, Resource]) =>
        this.mapResource(resource, capacity)
      ),
      distinctUntilChanged((prev: MappedResource, curr: MappedResource) =>
        this.isResourceOrCapacityChanged(prev, curr)
      )
    );
  }

  public resourceListener(): Observable<Resource> {
    return this.planetSocketService
      .onPlanetListening()
      .pipe(map((planet: PlanetSocketData) => planet.resources));
  }

  public capacityListener(): Observable<Resource> {
    return this.planetSocketService
      .onPlanetListening()
      .pipe(map((planet: PlanetSocketData) => planet.resourcesCapacity));
  }

  private mapResource(resource: Resource, capacity: Resource): MappedResource {
    return {
      metal: {
        value: this.numberDisplayPipe.transform(resource.metal, 'bold-suffix'),
        capacity: this.numberDisplayPipe.transform(capacity.metal),
      },
      deuterium: {
        value: this.numberDisplayPipe.transform(
          resource.deuterium,
          'bold-suffix'
        ),
        capacity: this.numberDisplayPipe.transform(capacity.deuterium),
      },
      energy: {
        value: this.numberDisplayPipe.transform(resource.energy, 'bold-suffix'),
        capacity: this.numberDisplayPipe.transform(capacity.energy),
      },
      crystal: {
        value: this.numberDisplayPipe.transform(
          resource.crystal,
          'bold-suffix'
        ),
        capacity: this.numberDisplayPipe.transform(capacity.crystal),
      },
    };
  }

  private isResourceOrCapacityChanged(
    prev: MappedResource,
    curr: MappedResource
  ): boolean {
    return (
      prev?.crystal?.value === curr?.crystal?.value &&
      prev?.metal?.value === curr?.metal?.value &&
      prev?.energy?.value === curr?.energy?.value &&
      prev?.deuterium?.value === curr?.deuterium?.value &&
      prev?.crystal?.capacity === curr?.crystal?.capacity &&
      prev?.metal?.capacity === curr?.metal?.capacity &&
      prev?.energy?.capacity === curr?.energy?.capacity &&
      prev?.deuterium?.capacity === curr?.deuterium?.capacity
    );
  }
}
