import { Component, Input } from '@angular/core';

import { Coordinates } from '@models/interfaces/game/coordinates/coordinates';

@Component({
  selector: 'app-fleet-localization',
  templateUrl: './fleet-localization.component.html',
  styleUrls: ['./fleet-localization.component.scss'],
})
export class FleetLocalizationComponent {
  @Input() public localization: Coordinates | undefined;
}
