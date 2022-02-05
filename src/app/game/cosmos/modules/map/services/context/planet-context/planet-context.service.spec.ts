import { TestBed } from '@angular/core/testing';

import { PlanetContextService } from './planet-context.service';

describe('PlanetContextService', () => {
  let service: PlanetContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
