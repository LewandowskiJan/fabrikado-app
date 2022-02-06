import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GameMapContext } from '@models/enums/game-map-context';
import { ElementsInsideHexagonData } from '@models/interfaces/game/game-map/elements-inside-hexagon-data';
import { PlanetSocketData } from '@models/interfaces/game/planet/planet-socket-data';

import { PlanetSocketService } from '../../../planet/services/planet-socket.service';
import { ContextService } from '../../map/services/context/context.service';
import { RightClickService } from '../../right-click-menu/services/right-click.service';
import {
  sideContextMenuForSelectionAnimation,
  sideContextMenuForSelectionChangeAnimation,
} from '../side-context-menu-for-selection.animation';

@Component({
  selector: 'app-side-context-menu-for-selection',
  templateUrl: './side-context-menu-for-selection.component.html',
  styleUrls: ['./side-context-menu-for-selection.component.scss'],
  animations: [
    sideContextMenuForSelectionAnimation,
    sideContextMenuForSelectionChangeAnimation,
  ],
})
export class SideContextMenuForSelectionComponent {
  public gameMapContext: typeof GameMapContext = GameMapContext;
  public currentFleetContext$: Observable<GameMapContext> =
    this.contextService.getCurrentGameMapContext();

  public planetData$: Observable<PlanetSocketData | null> =
    this.socketPlanetService.getCurrentPlanet().pipe(tap(console.log));

  public currentContextData: Observable<ElementsInsideHexagonData | null> =
    this.rightClickService.getData().pipe(
      tap((data: ElementsInsideHexagonData | null) => {
        console.log(data);
        if (!data) return;
        this.socketPlanetService.preparePlanet(data?.planet?.data?.planetName);
      })
    );

  constructor(
    private contextService: ContextService,
    private rightClickService: RightClickService,
    private socketPlanetService: PlanetSocketService
  ) {
    this.currentContextData.subscribe();
  }

  public close(): void {
    this.contextService.setCurrentGameMapContext(GameMapContext.DEFAULT);
  }
}
