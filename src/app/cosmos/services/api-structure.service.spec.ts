import { TestBed } from '@angular/core/testing';

import { ApiStructureService } from './api-structure.service';

describe('ApiStructureService', () => {
  let service: ApiStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
