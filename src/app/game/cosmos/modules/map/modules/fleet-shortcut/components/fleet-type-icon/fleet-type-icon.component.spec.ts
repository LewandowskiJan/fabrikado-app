import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetTypeIconComponent } from './fleet-type-icon.component';

describe('FleetTypeIconComponent', () => {
  let component: FleetTypeIconComponent;
  let fixture: ComponentFixture<FleetTypeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetTypeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
