import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelclaimComponent } from './travelclaim.component';

describe('TravelclaimComponent', () => {
  let component: TravelclaimComponent;
  let fixture: ComponentFixture<TravelclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
