import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BuildingType } from '@models/enums/building-type';
import { UnitType } from '@models/enums/unit-type';
import { Mine } from '@models/interfaces/game/building/mine';

import { MineService } from '../../services/mine.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss'],
})
export class MineComponent {
  public mines$: Observable<Mine[] | undefined> = this.mineService.mines$;

  public currentMine$: Observable<Mine | undefined> =
    this.mineService.currentMine$;

  constructor(private mineService: MineService) {}

  public selectDetails(type: BuildingType | UnitType | undefined): void {
    this.mineService.selectDetails(type);
    this.currentMine$ = this.mineService.currentMine$;
  }

  public onBuild(buildingType: BuildingType | UnitType | undefined): void {
    buildingType && this.mineService.onBuild(buildingType);
  }
}
