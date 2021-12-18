import { Component, Input } from '@angular/core';

import { Building } from '@src/app/models/building';

@Component({
  selector: 'app-structure-details',
  templateUrl: './structure-details.component.html',
  styleUrls: ['./structure-details.component.scss'],
})
export class StructureDetailsComponent {
  @Input() public buildingDetails: Building | undefined | null;
}
