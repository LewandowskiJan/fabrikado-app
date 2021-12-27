import { TestBed } from '@angular/core/testing';

import { PlanetSocketService } from './planet-socket.service';

describe('PlanetSocketService', () => {
  let service: PlanetSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
