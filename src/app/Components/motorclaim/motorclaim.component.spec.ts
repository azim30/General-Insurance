import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorclaimComponent } from './motorclaim.component';

describe('MotorclaimComponent', () => {
  let component: MotorclaimComponent;
  let fixture: ComponentFixture<MotorclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
