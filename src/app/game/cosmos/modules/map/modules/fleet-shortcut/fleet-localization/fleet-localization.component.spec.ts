import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetLocalizationComponent } from './fleet-localization.component';

describe('FleetLocalizationComponent', () => {
  let component: FleetLocalizationComponent;
  let fixture: ComponentFixture<FleetLocalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetLocalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
