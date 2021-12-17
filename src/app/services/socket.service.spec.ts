import { TestBed } from '@angular/core/testing';

import { SocketPlanetService } from './socket.service';

describe('SocketService', () => {
  let service: SocketPlanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketPlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
