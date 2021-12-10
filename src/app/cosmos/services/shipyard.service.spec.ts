import { TestBed } from '@angular/core/testing';

import { ShipyardService } from './shipyard.service';

describe('ResearchService', () => {
  let service: ShipyardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(DefenceService); defenceService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
