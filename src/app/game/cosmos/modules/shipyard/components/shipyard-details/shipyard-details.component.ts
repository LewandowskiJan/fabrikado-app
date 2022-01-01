import { Component, Input } from '@angular/core';

import { Unit } from '../../model/unit';

@Component({
  selector: 'app-shipyard-details',
  templateUrl: './shipyard-details.component.html',
  styleUrls: ['./shipyard-details.component.scss'],
})
export class ShipyardDetailsComponent {
  @Input() unit: Unit | undefined;
}
