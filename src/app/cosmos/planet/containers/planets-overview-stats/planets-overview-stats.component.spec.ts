import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsOverviewStatsComponent } from './planets-overview-stats.component';

describe('PlanetsOverviewStatsComponent', () => {
  let component: PlanetsOverviewStatsComponent;
  let fixture: ComponentFixture<PlanetsOverviewStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsOverviewStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsOverviewStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
