import { Component, Input } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Building } from '@src/app/shared/models/building';

@Component({
  selector: 'app-structure-details',
  templateUrl: './structure-details.component.html',
  styleUrls: ['./structure-details.component.scss'],
})
export class StructureDetailsComponent {
  @Input() public buildingDetails$: Observable<Building | undefined> =
    of(undefined);
}
