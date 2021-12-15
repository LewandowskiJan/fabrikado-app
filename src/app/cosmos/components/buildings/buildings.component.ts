import { Component, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Structure } from '../../models/structure';
import { BuildingsService } from '../../services/buildings.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent implements OnDestroy {
  public itemsCount: number = 0;
  public itemsCount1: number = this.buildingsService.itemsCount;
  public onDestroy$: Subject<void> = new Subject();
  public structures: Structure[] = [];
  public structures$: Observable<Structure[]> =
    this.buildingsService.structures$;
  public structures$1: Observable<number> = this.buildingsService.itemsCount$;
  public currentDetails: Structure | undefined;

  constructor(private buildingsService: BuildingsService) {
    this.buildingsService.structures$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((res: Structure[]) => {
        this.structures = res;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public selectDetails(details: Structure): void {
    this.currentDetails = details;
  }
  public buy(): void {
    this.itemsCount1 = this.buildingsService.itemsCount++;
    this.itemsCount++;
    this.buildingsService.itemsCount$.next(this.itemsCount);
  }
}
