import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';

import { PlanetSocketData } from './../../../../../../domain/endpoints/planet/planet-data';
import { ElementsInsideHexagonData } from './../../model/hexagon';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public planetData$: Observable<PlanetSocketData | null> =
    this.socketPlanetService.getCurrentPlanet().pipe(tap(console.log));

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ElementsInsideHexagonData,
    public dialogRef: MatDialogRef<DialogComponent>,
    private socketPlanetService: PlanetSocketService
  ) {
    if (!this.data.planet || !this.data.planet.data) return;

    this.socketPlanetService.preparePlanet(this.data.planet.data.planetName);
  }
}
