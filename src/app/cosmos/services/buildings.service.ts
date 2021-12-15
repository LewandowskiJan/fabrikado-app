import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Structure } from '../models/structure';
import { ApiStructureService } from './api-structure.service';

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  public itemsCount: number = 0;
  public itemsCount$: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private apiStructureService: ApiStructureService) {}
  public structures$: Observable<Structure[]> =
    this.apiStructureService.getData();
}
