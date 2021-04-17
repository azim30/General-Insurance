import { TestBed } from '@angular/core/testing';

import { ClaiminfoService } from './claiminfo.service';

describe('ClaiminfoService', () => {
  let service: ClaiminfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaiminfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
