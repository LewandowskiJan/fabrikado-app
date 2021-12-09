import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fadeAnimation } from '../../animation';

@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrls: ['./cosmos.component.scss'],
  animations: [fadeAnimation],
})
export class CosmosComponent {
  public prepareRoute(outlet: RouterOutlet): any {
    return {
      value: outlet?.activatedRoute?.snapshot?.params?.id,
    };
  }
}
