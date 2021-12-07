import { Component } from '@angular/core';

import { Structure } from '../../models/structure';
import { BuildingsService } from '../../services/buildings.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent {
  public structures: Structure[] = this.buildingsService.structures;
  public currentDetails: Structure | undefined;

  constructor(private buildingsService: BuildingsService) {}

  public selectDetails(details: Structure): void {
    this.currentDetails = details;
  }
}
