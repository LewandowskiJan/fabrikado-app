import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetLayoutComponent } from './planet-layout.component';

describe('PlanetLayoutComponent', () => {
  let component: PlanetLayoutComponent;
  let fixture: ComponentFixture<PlanetLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
