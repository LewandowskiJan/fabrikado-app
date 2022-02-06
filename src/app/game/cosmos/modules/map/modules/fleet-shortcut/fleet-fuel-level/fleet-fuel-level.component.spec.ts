import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetFuelLevelComponent } from './fleet-fuel-level.component';

describe('FleetFuelLevelComponent', () => {
  let component: FleetFuelLevelComponent;
  let fixture: ComponentFixture<FleetFuelLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetFuelLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetFuelLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
