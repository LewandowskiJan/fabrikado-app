import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

import { AdmiralAvatarData } from '@models/interfaces/game/unit/admiral-avatar-data';

@Component({
  selector: 'app-fleet-admiral-avatar',
  templateUrl: './fleet-admiral-avatar.component.html',
  styleUrls: ['./fleet-admiral-avatar.component.scss'],
})
export class FleetAdmiralAvatarComponent {
  @Input() public admiralAvatar: string | undefined = 'test1';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position: any = new FormControl(this.positionOptions[2]);
  @Input() public AdmiralAvatarData: AdmiralAvatarData = {
    rarity: 'S',
    name: 'StachuJones',
    admiralAvatar: 'test',
    buffs: {
      flightSpeedIncrease: 5, // 0/100 %
      dmgIncrease: 9, // 0/100 %
      defIncrease: 4, // 0/100 %
      antiRadar: '-1hex',
      other: 'test',
      other2: 'test',
    },
  };
}
