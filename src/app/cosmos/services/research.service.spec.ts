import { TestBed } from '@angular/core/testing';

import { ResearchService } from './research.service';

describe('ResearchService', () => {
  let service: ResearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(DefenceService); defenceService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
