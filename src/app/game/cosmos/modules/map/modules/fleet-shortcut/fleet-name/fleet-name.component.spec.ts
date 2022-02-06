import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetNameComponent } from './fleet-name.component';

describe('FleetNameComponent', () => {
  let component: FleetNameComponent;
  let fixture: ComponentFixture<FleetNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
