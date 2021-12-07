import { Component } from '@angular/core';

import { BuildingsService } from './../../services/buildings.service';
export interface Cost {
  m: number;
  k: number;
  d: number;
}
export interface Structure {
  id: string;
  name: string;
  cost: Cost;
  image: string;
  canBuild: boolean;
  description: string;
  buildingTime: string;
}
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
