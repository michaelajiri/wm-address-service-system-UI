import { TestBed } from '@angular/core/testing';

import { ResidenceDataService } from './residence-data.service';

describe('ResidenceDataService', () => {
  let service: ResidenceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
