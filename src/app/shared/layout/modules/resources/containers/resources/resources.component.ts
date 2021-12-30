import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ResourceShortCode } from '../../model/resource-short-code-map';
import {
  MappedResource,
  ResourcesService,
} from './../../services/resources.service';

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
