import { TestBed } from '@angular/core/testing';

import { CustomerInfoService } from './customer-info.service';

describe('CustomerInfoService', () => {
  let service: CustomerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
