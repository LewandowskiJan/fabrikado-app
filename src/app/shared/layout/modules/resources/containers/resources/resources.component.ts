import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { MappedResource } from '@models/interfaces/game/resources/mapped-resource';

import { ResourceShortCode } from '../../model/resource-short-code-map';
import { ResourcesService } from './../../services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  public resourceWithCapacity$: Observable<MappedResource | undefined>;
  public resourceShortCode: typeof ResourceShortCode = ResourceShortCode;

  constructor(resourcesService: ResourcesService) {
    this.resourceWithCapacity$ =
      resourcesService.resourceWithCapacityListener();
  }
}
