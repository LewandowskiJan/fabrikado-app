import { Component, Input } from '@angular/core';

import { Unit } from '../../../../shipyard/model/unit';

@Component({
  selector: 'app-defence-details',
  templateUrl: './defence-details.component.html',
  styleUrls: ['./defence-details.component.scss'],
})
export class DefenceDetailsComponent {
  @Input() currentDefenceUnit: Unit | undefined;
}
