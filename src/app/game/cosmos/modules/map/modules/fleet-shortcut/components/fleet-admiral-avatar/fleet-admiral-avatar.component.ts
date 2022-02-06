import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fleet-admiral-avatar',
  templateUrl: './fleet-admiral-avatar.component.html',
  styleUrls: ['./fleet-admiral-avatar.component.scss'],
})
export class FleetAdmiralAvatarComponent {
  @Input() public admiralAvatar: string | undefined = 'test1';
}
