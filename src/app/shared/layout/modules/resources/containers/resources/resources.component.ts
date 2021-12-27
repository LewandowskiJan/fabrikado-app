import { Component } from '@angular/core';

import { Observable, pipe } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

import { Resource } from '@src/app/shared/models/resource';
import { NumberDisplayPipe } from '@src/app/shared/pipes/number-display/number-display.pipe';

import { ResourceShortCode } from '../../model/resource-short-code-map';
import { ResourcesService } from './../../services/resources.service';

interface MappedResource {
  metal: string | number;
  deuterium: string | number;
  energy: string | number;
  crystal: string | number;
}
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  public resource$: Observable<MappedResource | undefined>;
  public resourceShortCode: typeof ResourceShortCode = ResourceShortCode;

  constructor(
    resourcesService: ResourcesService,
    private numberDisplayPipe: NumberDisplayPipe
  ) {
    this.resource$ = resourcesService.resourceListener().pipe(
      map((resource: Resource) => this.mapResource(resource)),
      distinctUntilChanged((prev: MappedResource, curr: MappedResource) =>
        this.isResourceChanged(prev, curr)
      )
    );
  }

  private mapResource(resource: Resource): MappedResource {
    return {
      metal: this.numberDisplayPipe.transform(resource.metal, 'bold-suffix'),
      deuterium: this.numberDisplayPipe.transform(
        resource.deuterium,
        'bold-suffix'
      ),
      energy: this.numberDisplayPipe.transform(resource.energy, 'bold-suffix'),
      crystal: this.numberDisplayPipe.transform(
        resource.crystal,
        'bold-suffix'
      ),
    };
  }

  private isResourceChanged(
    prev: MappedResource,
    curr: MappedResource
  ): boolean {
    return (
      prev?.crystal === curr?.crystal &&
      prev?.metal === curr?.metal &&
      prev?.energy === curr?.energy &&
      prev?.deuterium === curr?.deuterium
    );
  }
}
