import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { ElementsInsideHexagonData } from '@models/interfaces/game/game-map/elements-inside-hexagon-data';
import { PlanetSocketData } from '@models/interfaces/game/planet/planet-socket-data';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public planetData$: Observable<PlanetSocketData | null> =
    this.socketPlanetService.getCurrentPlanet();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ElementsInsideHexagonData,
    public dialogRef: MatDialogRef<DialogComponent>,
    private socketPlanetService: PlanetSocketService
  ) {
    if (!this.data.planet || !this.data.planet.data) return;

    this.socketPlanetService.preparePlanet(this.data.planet.data.planetName);
  }
}
