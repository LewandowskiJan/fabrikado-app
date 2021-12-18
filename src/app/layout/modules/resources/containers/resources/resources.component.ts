import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Resource } from './../../../../../models/resource';
import { ResourcesService } from './../../services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  public resource$: Observable<Resource | undefined>;

  constructor(resourcesService: ResourcesService) {
    this.resource$ = resourcesService.resourceListener();
  }
}
