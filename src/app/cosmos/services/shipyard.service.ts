import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Structure } from '../models/structure';
import { ApiStructureService } from './api-structure.service';

@Injectable({
  providedIn: 'root',
})
export class ShipyardService {
  constructor(private apiStructureService: ApiStructureService) {}
  public shipyard$: Observable<Structure[]> = this.apiStructureService.getData();
}
