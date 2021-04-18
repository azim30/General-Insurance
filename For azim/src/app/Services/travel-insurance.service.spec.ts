import { TestBed } from '@angular/core/testing';

import { TravelInsuranceService } from './travel-insurance.service';

describe('TravelInsuranceService', () => {
  let service: TravelInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
