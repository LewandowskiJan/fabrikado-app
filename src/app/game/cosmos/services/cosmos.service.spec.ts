import { TestBed } from '@angular/core/testing';

import { CosmosService } from './cosmos.service';

describe('CosmosService', () => {
  let service: CosmosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
