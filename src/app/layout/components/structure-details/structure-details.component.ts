import { Component, Input } from '@angular/core';

import { Structure } from 'src/app/cosmos/components/buildings/buildings.component';

@Component({
  selector: 'app-structure-details',
  templateUrl: './structure-details.component.html',
  styleUrls: ['./structure-details.component.scss'],
})
export class StructureDetailsComponent {
  @Input() public structureDetails: Structure | undefined;
}
