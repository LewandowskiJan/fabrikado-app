import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FleetAdmiralAvatarComponent } from './fleet-admiral-avatar/fleet-admiral-avatar.component';
import { FleetFavoritesComponent } from './fleet-favorites/fleet-favorites.component';
import { FleetFuelLevelComponent } from './fleet-fuel-level/fleet-fuel-level.component';
import { FleetIconComponent } from './fleet-icon/fleet-icon.component';
import { FleetLocalizationComponent } from './fleet-localization/fleet-localization.component';
import { FleetNameComponent } from './fleet-name/fleet-name.component';
import { FleetShortcutComponent } from './fleet-shortcut/fleet-shortcut.component';
import { FleetTypeIconComponent } from './fleet-type-icon/fleet-type-icon.component';

@NgModule({
  declarations: [
    FleetShortcutComponent,
    FleetIconComponent,
    FleetNameComponent,
    FleetFuelLevelComponent,
    FleetLocalizationComponent,
    FleetAdmiralAvatarComponent,
    FleetTypeIconComponent,
    FleetFavoritesComponent,
  ],
  exports: [FleetShortcutComponent],
  imports: [CommonModule],
})
export class FleetShortcutModule {}
