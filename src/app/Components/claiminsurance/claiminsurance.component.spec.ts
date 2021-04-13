import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaiminsuranceComponent } from './claiminsurance.component';

describe('ClaiminsuranceComponent', () => {
  let component: ClaiminsuranceComponent;
  let fixture: ComponentFixture<ClaiminsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaiminsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaiminsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
