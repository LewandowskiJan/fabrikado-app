import { Component } from '@angular/core';

import { Structure } from '../../models/structure';
import { ShipyardService } from '../../services/shipyard.service';

@Component({
  selector: 'app-shipyard',
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.scss'],
})
export class ShipyardComponent {
  public structures: Structure[] = this.shipyardService.shipyard;
  public currentDetails: Structure | undefined;

  constructor(private shipyardService: ShipyardService) {}

  public selectDetails(details: Structure): void {
    this.currentDetails = details;
  }
}
