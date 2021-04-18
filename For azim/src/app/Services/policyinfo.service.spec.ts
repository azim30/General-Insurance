import { TestBed } from '@angular/core/testing';

import { PolicyinfoService } from './policyinfo.service';

describe('PolicyinfoService', () => {
  let service: PolicyinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
