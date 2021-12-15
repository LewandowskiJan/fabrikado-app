import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Structure } from '../models/structure';
import { ApiStructureService } from './api-structure.service';

@Injectable({
  providedIn: 'root',
})
export class DefenceService {
  constructor(private apiStructureService: ApiStructureService) {}
  public defence$: Observable<Structure[]> = this.apiStructureService.getData();
}
