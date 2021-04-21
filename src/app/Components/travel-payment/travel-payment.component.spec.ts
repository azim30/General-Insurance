import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPaymentComponent } from './travel-payment.component';

describe('TravelPaymentComponent', () => {
  let component: TravelPaymentComponent;
  let fixture: ComponentFixture<TravelPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
