import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervehicleComponent } from './registervehicle.component';

describe('RegistervehicleComponent', () => {
  let component: RegistervehicleComponent;
  let fixture: ComponentFixture<RegistervehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistervehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistervehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
