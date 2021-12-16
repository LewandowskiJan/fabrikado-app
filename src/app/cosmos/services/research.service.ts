import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Structure } from '../models/structure';
import { ApiStructureService } from './api-structure.service';

@Injectable({
  providedIn: 'root',
})
export class ResearchService {
  constructor(private apiStructureService: ApiStructureService) {}
  public research$: Observable<Structure[]> = this.apiStructureService.getData();
}
