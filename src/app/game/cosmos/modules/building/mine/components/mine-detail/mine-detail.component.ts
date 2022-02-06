import { Component, Input } from '@angular/core';

import { Mine } from '@models/interfaces/game/building/mine';

@Component({
  selector: 'app-mine-detail',
  templateUrl: './mine-detail.component.html',
  styleUrls: ['./mine-detail.component.scss'],
})
export class MineDetailComponent {
  @Input() mine: Mine | undefined;
}
