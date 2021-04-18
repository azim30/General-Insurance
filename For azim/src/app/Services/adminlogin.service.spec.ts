import { TestBed } from '@angular/core/testing';

import { AdminloginService } from './adminlogin.service';

describe('AdminloginService', () => {
  let service: AdminloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
