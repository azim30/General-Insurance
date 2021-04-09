import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyInsuranceComponent } from './buy-insurance.component';

describe('BuyInsuranceComponent', () => {
  let component: BuyInsuranceComponent;
  let fixture: ComponentFixture<BuyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
