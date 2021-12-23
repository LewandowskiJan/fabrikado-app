import { TestBed } from '@angular/core/testing';

import { EMPTY } from 'rxjs';

import { MockProvider } from 'ng-mocks';

import { SocketPlanetService } from '@src/app/services/socket.service';

import { MineService } from './mine.service';

describe('MineService', () => {
  let service: MineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MineService,
        MockProvider(SocketPlanetService, {
          fetchSources: () => EMPTY,
          preparePlanet: () => EMPTY,
          onFetchPlanet: () => EMPTY,
          planetErrorListener: () => EMPTY,
          onFetchSources: () => EMPTY,
          onUpgradeTimeListener: () => EMPTY,
          onBuild: () => EMPTY,
          onFetchBuildings: () => EMPTY,
        }),
      ],
    });
    service = TestBed.inject(MineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
