import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fleet-fuel-level',
  templateUrl: './fleet-fuel-level.component.html',
  styleUrls: ['./fleet-fuel-level.component.scss'],
})
export class FleetFuelLevelComponent {
  @Input() public fuelLevel: number = 50;
}
