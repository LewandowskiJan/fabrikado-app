import { TestBed } from '@angular/core/testing';

import { DefenceService } from './defence.service';

describe('DefencesService', () => {
  let service: DefenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(DefenceService); defenceService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
