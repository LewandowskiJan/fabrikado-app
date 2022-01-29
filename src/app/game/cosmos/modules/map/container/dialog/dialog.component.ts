import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';

import { PlanetSocketData } from './../../../../../../domain/endpoints/planet/planet-data';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public planetData$: Observable<PlanetSocketData | null> =
    this.socketPlanetService.getCurrentPlanet().pipe(tap(console.log));

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private socketPlanetService: PlanetSocketService
  ) {
    this.socketPlanetService.preparePlanet('G1C-SY1AF-P3H');
  }
}
