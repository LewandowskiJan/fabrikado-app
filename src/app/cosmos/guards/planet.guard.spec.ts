import { TestBed } from '@angular/core/testing';

import { PlanetGuard } from './planet.guard';

describe('PlanetGuard', () => {
  let guard: PlanetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlanetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
