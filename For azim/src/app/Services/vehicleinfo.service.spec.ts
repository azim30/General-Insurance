import { TestBed } from '@angular/core/testing';

import { VehicleinfoService } from './vehicleinfo.service';

describe('VehicleinfoService', () => {
  let service: VehicleinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
