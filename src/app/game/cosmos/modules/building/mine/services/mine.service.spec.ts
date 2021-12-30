import { TestBed } from '@angular/core/testing';

import { EMPTY } from 'rxjs';

import { MockProvider } from 'ng-mocks';

import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';

import { MineService } from './mine.service';

describe('MineService', () => {
  let service: MineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MineService,
        MockProvider(PlanetSocketService, {
          fetchSources: () => EMPTY,
          getPlayerData: () => EMPTY,
          preparePlanet: () => EMPTY,
          getPlanetsName: () => EMPTY,
          onFetchPlanet: () => EMPTY,
        }),
      ],
    });
    service = TestBed.inject(MineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
