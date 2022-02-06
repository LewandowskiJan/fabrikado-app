import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetIconComponent } from './fleet-icon.component';

describe('FleetIconComponent', () => {
  let component: FleetIconComponent;
  let fixture: ComponentFixture<FleetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
