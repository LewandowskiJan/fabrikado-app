import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fadeAnimation } from '../../animation';
import { CosmosService } from './../../services/cosmos.service';

@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrls: ['./cosmos.component.scss'],
  animations: [fadeAnimation],
})
export class CosmosComponent {
  public planetsNames: string[] = this.cosmosService.planetsName;

  constructor(private cosmosService: CosmosService) {}

  public prepareRoute(outlet: RouterOutlet): any {
    return {
      value: outlet?.activatedRoute?.snapshot?.params?.id,
    };
  }

  public logout(): void {
    this.cosmosService.logout();
  }
}
