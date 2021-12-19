import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fadeAnimation } from '../../animation';
import { RestService } from './../../../domain/services/rest.service';

@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrls: ['./cosmos.component.scss'],
  animations: [fadeAnimation],
})
export class CosmosComponent {
  public planetsIds: string[] = [];
  constructor(private restService: RestService) {
    this.restService.userData &&
      this.planetsIds.push(...this.restService.userData.planets);
  }

  public prepareRoute(outlet: RouterOutlet): any {
    return {
      value: outlet?.activatedRoute?.snapshot?.params?.id,
    };
  }
}
