import { TestBed } from '@angular/core/testing';

import { PlanetResolver } from './planet.resolver';

describe('PlanetResolver', () => {
  let resolver: PlanetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlanetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
