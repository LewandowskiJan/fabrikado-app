import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { BuildingType } from '@src/app/shared/models/buildingType';

import { Mine } from '../../model/mine';
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

  public selectDetails(type: BuildingType | undefined): void {
    this.mineService.selectDetails(type);
    this.currentMine$ = this.mineService.currentMine$;
  }

  public onBuild(buildingType: BuildingType | undefined): void {
    buildingType && this.mineService.onBuild(buildingType);
  }
}
