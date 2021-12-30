import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private currentPlanetData$: BehaviorSubject<PlanetSocketData> =
    new BehaviorSubject({} as PlanetSocketData);

  public setupPlanetData(planetSocketData: PlanetSocketData): void {
    this.currentPlanetData$.next(planetSocketData);
  }

  public getCurrentPlanetData(): Observable<PlanetSocketData | null> {
    return this.currentPlanetData$.asObservable();
  }
}
