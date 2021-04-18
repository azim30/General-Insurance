import { TestBed } from '@angular/core/testing';

import { TravelclaiminfoService } from './travelclaiminfo.service';

describe('TravelclaiminfoService', () => {
  let service: TravelclaiminfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelclaiminfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
