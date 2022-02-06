import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { ResourceData } from 'api/src/sockets/domain/endpoints/resource/resource-data';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';
import { PlanetSocketData } from '@models/interfaces/game/planet/planet-socket-data';
import { MappedResource } from '@models/interfaces/game/resources/mapped-resource';
import { NumberDisplayPipe } from '@src/app/shared/pipes/number-display/number-display.pipe';

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
      map(([resource, capacity]: [ResourceData, ResourceData]) =>
        this.mapResource(resource, capacity)
      ),
      distinctUntilChanged((prev: MappedResource, curr: MappedResource) =>
        this.isResourceOrCapacityChanged(prev, curr)
      )
    );
  }

  public resourceListener(): Observable<ResourceData> {
    return this.planetSocketService
      .onPlanetListening()
      .pipe(map((planet: PlanetSocketData) => planet.resources));
  }

  public capacityListener(): Observable<ResourceData> {
    return this.planetSocketService
      .onPlanetListening()
      .pipe(map((planet: PlanetSocketData) => planet.resourcesCapacity));
  }

  private mapResource(
    resource: ResourceData,
    capacity: ResourceData
  ): MappedResource {
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
