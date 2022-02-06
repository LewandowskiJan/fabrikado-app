import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { GameMapContext } from '@models/enums/game-map-context';

import { FleetContextService } from './fleet-context/fleet-context.service';
import { PlanetContextService } from './planet-context/planet-context.service';

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  private currentGameMapContext$: Subject<GameMapContext> =
    new BehaviorSubject<GameMapContext>(GameMapContext.DEFAULT);

  constructor(
    private planetContextService: PlanetContextService,
    private fleetContextService: FleetContextService
  ) {}

  public getCurrentGameMapContext(): Observable<GameMapContext> {
    return this.currentGameMapContext$.asObservable();
  }

  public setCurrentGameMapContext(gameMapContext: GameMapContext): void {
    this.currentGameMapContext$.next(gameMapContext);
  }
}
