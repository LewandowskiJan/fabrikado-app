import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-planets-overview-stats',
  templateUrl: './planets-overview-stats.component.html',
  styleUrls: ['./planets-overview-stats.component.scss'],
})
export class PlanetsOverviewStatsComponent {
  public prepareRoute(outlet: RouterOutlet): any {
    return {
      value: outlet?.activatedRoute?.snapshot?.params?.id,
    };
  }
}
