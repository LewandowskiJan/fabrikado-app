import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BuildingType } from '@models/enums/building-type';
import { UnitType } from '@models/enums/unit-type';
import { Technology } from '@models/types/technology';

import { TechnologyService } from './../../services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent {
  public technologies$: Observable<Technology[] | undefined> =
    this.technologyService.mines$;

  public currentTechnology$: Observable<Technology | undefined> =
    this.technologyService.currentTechnology$;

  constructor(private technologyService: TechnologyService) {}

  public selectDetails(type: BuildingType | UnitType | undefined): void {
    this.technologyService.selectDetails(type);
    this.currentTechnology$ = this.technologyService.currentTechnology$;
  }

  public onBuild(buildingType: BuildingType | UnitType | undefined): void {
    buildingType && this.technologyService.onBuild(buildingType);
  }
}
