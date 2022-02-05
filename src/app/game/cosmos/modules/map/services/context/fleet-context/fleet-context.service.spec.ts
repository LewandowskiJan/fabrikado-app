import { TestBed } from '@angular/core/testing';

import { FleetContextService } from './fleet-context.service';

describe('FleetContextService', () => {
  let service: FleetContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
