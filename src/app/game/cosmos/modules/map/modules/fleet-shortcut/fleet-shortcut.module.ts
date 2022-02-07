import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FleetAdmiralAvatarComponent } from './components/fleet-admiral-avatar/fleet-admiral-avatar.component';
import { FleetFavoritesComponent } from './components/fleet-favorites/fleet-favorites.component';
import { FleetFuelLevelComponent } from './components/fleet-fuel-level/fleet-fuel-level.component';
import { FleetIconComponent } from './components/fleet-icon/fleet-icon.component';
import { FleetLocalizationComponent } from './components/fleet-localization/fleet-localization.component';
import { FleetNameComponent } from './components/fleet-name/fleet-name.component';
import { FleetTypeIconComponent } from './components/fleet-type-icon/fleet-type-icon.component';
import { FleetShortcutComponent } from './containers/fleet-shortcut/fleet-shortcut.component';

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
  imports: [CommonModule, MatTooltipModule],
})
export class FleetShortcutModule {}
