import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { FleetData } from './../../../../../../domain/endpoints/fleets/fleet-data';
import { FleetService } from './../../services/fleet.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
})
export class FleetComponent {
  public fleet$: Observable<FleetData | undefined> = this.fleetService.fleet$;

  constructor(private fleetService: FleetService) {}
}
